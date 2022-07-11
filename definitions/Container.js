xds.component.Registry.addDefinition({
    override: "Ext.Container",
    typeAlias: "container",

    "transformGroup": "containers",
    "toolbox": {
        "name": "Container",
        "iconCls": "icon-container",
        "category": "Containers",
        "groups": ["Containers",'Views']
    },

    "validChildTypes": null, //unset the value inherited from Component so it accepts any type

    obscureCfgs: ['html', 'defaultType', 'defaults'],

    ignoreCfgs: [
        'activeItem', // Added automatically when layout is set to Card
        'control', // This would have to be handled like we do for Controllers and Actions
        'defaultType', // Makes no sense in Architect
        'items' // Child refs
    ],

    cfgs: [
        {
            name: 'layout',
            merge: false, //we want to own this config completely
            type: 'string',
            defaultValue: 'auto',
            editor: 'options',
            options: xds.component.Registry.getAllVisibleLayouts()
        }
    ],

    init: function() {
        var me = this;

        me.on({
            create: me.onCreate,
            restore: me.onRestore,
            remove: me.onRemove,
            flyout: me.onFlyout,
            cfgchange: me.onCfgChange,
            removechild: me.onChildRemoved,
            addchild: me.onChildAdded,
            restorechild: me.onChildAdded,
            beforeaddchild: me.onBeforeAddChild,
            scope: me
        });
    },

    onCreate: function() {
        var me = this,
            initialLayout = me.getCfgValueOrDefault('layout');

        if (initialLayout) {
            me.onLayoutChange(initialLayout, null);
        }
    },

    onRestore: function() {
        var me = this,
            initialLayout = me.getCfgValueOrDefault('layout');

        if (initialLayout) {
            me.onLayoutChange(initialLayout, null, true);
        }
    },

    onBeforeAddChild: function(child) {
        var layout = this.getCfgValue('layout'),
            isField = child.isType('Ext.field.Field');

        // allow only fields to be added into the container with form layout set
        return layout !== 'form' || isField;
    },

    onFlyout: function() {
        var me = this,
            items = [],
            alignValues;

        var checkLayout = function(layout) {
            return me.getCfgValueOrDefault('layout') === layout;
        };

        if (me.hasCfg('layout') && !me.flyCfg('layout').isHidden()) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Select a layout',
                data: (() => {
                    const me = this,
                        configlayouts = me.getCfg('layout').config.options,
                        availableLayouts = xds.component.Registry.getAllVisibleLayouts(),
                        layouts = (configlayouts && configlayouts.length > 0) ? configlayouts : availableLayouts,
                        formLayoutIndex = layouts.indexOf('form');

                    // if there is form layout and not all children are type of Field
                    if (formLayoutIndex >= 0 && !me.children().every(child => child.isType('Ext.field.Field'))) {
                        // remove the form layout
                        layouts.splice(formLayoutIndex, 1);
                    }

                    return layouts;
                })(),
                bindTo: {
                    name: 'layout',
                    event: 'select'
                }
            });
        }

        if (['hbox', 'vbox', 'toolbar'].some(checkLayout)) {
            if (me.hasCfg('container|align')) {
                if (me.isType('titlebar')) {
                    alignValues = ['start', 'center', 'end'];
                } else {
                    alignValues = ['start', 'center', 'end', 'stretch', 'stretchmax'];
                }
                items.push({
                    xtype: 'flyoutselect',
                    fieldLabel: 'Alignment',
                    data: alignValues,
                    bindTo: {
                        name: 'container|align',
                        event: 'select'
                    }
                });
            }
            // Pack doesnt work on titltbar
            if (me.hasCfg('container|pack') && !me.isType('titlebar')) {
                items.push({
                    xtype: 'flyoutselect',
                    fieldLabel: 'Pack',
                    data: ['start', 'center', 'end'],
                    bindTo: {
                        name: 'container|pack',
                        event: 'select'
                    }
                });
            }
        }

        if (!me.isLinkedInstance && checkLayout('card') && this.hasCfg('activeItem')) {
            var cards = [], text,
                cn = me.children(),
                i = 0, j = 0, c;
            for (; c = cn[i]; i++) {
                if (!c.getCfgValueOrDefault('docked') &&
                    !c.getCfgValueOrDefault('centered') &&
                    !c.getCfgValueOrDefault('floating')) {
                    text = String.format("{0} - {1}", j, c.getDisplayName({excludeSuffix: true}));
                    cards.push([text, j]);
                    j++;
                }
            }
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Active Item',
                data: cards,
                bindTo: {
                    name: 'activeItem',
                    event: 'select'
                }
            });
        }

        if (checkLayout('card') && me.hasCfg('container|animation')) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Card Switch Animation',
                data: me.flyCfg('container|animation').getEditorOptionsData(),
                bindTo: {
                    name: 'container|animation',
                    event: 'select'
                }
            });
        }

        if (me.hasCfg('scrollable')) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Scrollable',
                data: [
                    ['false', false],
                    ['true', true],
                    ['horizontal only', 'horizontal'],
                    ['vertical only', 'vertical'],
                    ['horizontal and vertical', 'both']
                ],
                bindTo: {
                    name: 'scrollable',
                    event: 'select'
                },
                setValue: function(val) {
                    // Display special label if the cfg has an object value
                    var cfg = me.flyCfg('scrollable');
                    if (cfg.isObject && cfg.parseValueType(val).type === 'object') {
                        val = xds.Resource.get('canvas').flyoutObjectCfg;
                    }
                    return sencha.ux.FlyoutSelect.prototype.setValue.call(this, val);
                }
            });
        }

        return items;
    },

    onChildAdded: function(child) {
        var me = this,
            layoutDefinition = me.getLayoutDefinition();

        if (layoutDefinition) {
            if (!child.ignoreLayoutCfgs) {
                layoutDefinition.cfgs.each(child.addCfg, child);
            }

            if (layoutDefinition.onBeforeAdd) {
                layoutDefinition.onBeforeAdd(this, child);
            }
        }
    },

    onRemove: function() {
        var layoutDef = this.getLayoutDefinition();
        if (layoutDef && layoutDef.onDestroy) {
            layoutDef.onDestroy(this);
        }
    },

    onChildRemoved: function(child) {
        var me = this,
            layoutDefinition = me.getLayoutDefinition();

        if (layoutDefinition) {
            layoutDefinition.cfgs.each(function(cfg) {
                child.removeCfg(cfg.name);
            });
        }
    },

    onCfgChange: function(name, value, oldValue) {
        switch (name) {
            case 'layout':
                this.onLayoutChange(value, oldValue);
                break;
        }
    },

    onLayoutChange: function(value, oldValue, isRestoring) {
        const me = this,
            layoutCfg = me.flyCfg('layout');

        if (layoutCfg && layoutCfg.getType() === 'object') {
            // TODO more investigation of the code bellow is needed to support layout object type generally
            return;
        }

        var children = me.children(),
            defaultLayout = me.getCfgDefaultValue('layout') || 'auto',
            oldLayoutDefinition = me.getLayoutDefinition(oldValue || defaultLayout),
            layoutDefinition = me.getLayoutDefinition(value || defaultLayout);

        if (oldLayoutDefinition.onDestroy) {
            oldLayoutDefinition.onDestroy(this);
        }

        // Remove old layout configs
        oldLayoutDefinition.layoutCfgs.each(function(cfg) {
            me.removeCfg(cfg.name);
        });
        children.each(function(child) {
            oldLayoutDefinition.cfgs.each(function(cfg) {
                if (!child.ignoreLayoutCfgs) {
                    child.removeCfg(cfg.name);
                }
            });
        });

        if (isRestoring) {
            me.suspendEvents();
        }

        // Inject new ones
        layoutDefinition.layoutCfgs.each(function(cfg) {
            if (!me.hasCfg(cfg.name)) {
                me.addCfg(cfg);
            }
        });
        children.each(function(child) {
            layoutDefinition.cfgs.each(function(cfg) {
                if (!child.hasCfg(cfg.name) && !child.ignoreLayoutCfgs) {
                    child.addCfg(cfg);
                }
            });
        });

        if (layoutDefinition.onInit) {
            layoutDefinition.onInit(this, isRestoring);
        }

        if (isRestoring) {
            me.resumeEvents();
        }
    },


    getLayoutDefinition: function(layoutValue) {
        layoutValue = layoutValue || this.getCfgValueOrDefault('layout');
        return layoutValue ? xds.component.Registry.getLayout(layoutValue) : null;
    }

});