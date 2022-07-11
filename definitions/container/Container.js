xds.component.Registry.addDefinition({
    override: "Ext.container.Container",
    typeAlias: 'container',

    canvasAlias: 'widget.xdcontainer',
    toolbox: {
        name: 'Container',
        iconCls: 'icon-container',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },

    transformGroup: 'container',
    validChildTypes: null, //allow any type of child

    obscureCfgs: ['bubbleEvents', 'defaults', 'defaultType', 'suspendLayout'],
    ignoreCfgs: [
        'activeItem', // added by card layout
        'defaultType', // doesn't make sense in Architect
        'items', // populated by child refs
        'renderTpl'
    ],

    cfgs: [{
        name: 'layout',
        merge: true,
        editor: 'options',
        options: xds.component.Registry.getAllVisibleLayouts(),
        alternates: null
    }],


    init: function() {
        var me = this;

        me.on({
            create: me.onCreate,
            restore: me.onRestore,
            flyout: me.onFlyout,
            cfgchange: me.onCfgChange,
            removechild: me.onChildRemoved,
            addchild: me.onChildAdded,
            restorechild: me.onChildRestored,
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

    getLayoutDefinition: function(layoutValue) {
        // if the default is anything other than 'auto' like 'form's case
        // this probably doesnt work.
        layoutValue = layoutValue || this.getCfgValue('layout') || this.getCfgDefaultValue('layout') || 'auto';
        return xds.component.Registry.getLayout(layoutValue);
    },

    onChildAdded: function(child) {
        var me = this,
            layoutDefinition = me.getLayoutDefinition();
        me.addChildLayoutCfgs(child);
        if (layoutDefinition && layoutDefinition.onBeforeAdd) {
            layoutDefinition.onBeforeAdd(me, child);
        }
    },

    onChildRestored: function(child) {
        this.addChildLayoutCfgs(child);
    },

    addChildLayoutCfgs: function(child) {
        var me = this,
            layoutDefinition = me.getLayoutDefinition();
        if (!child.ignoreLayoutCfgs) {
            layoutDefinition.cfgs.each(function(cfg) {
                child.addCfg(cfg);
            });
        }
    },

    onChildRemoved: function(child) {
        var me = this,
            layoutDefinition = me.getLayoutDefinition();

        layoutDefinition.cfgs.each(function(cfg) {
            child.removeCfg(cfg.name);
        });
    },

    onLayoutChange: function(value, oldValue, isRestoring) {
        const me = this,
            layoutCfg = me.flyCfg('layout');

        if (layoutCfg && layoutCfg.getType() === 'object') {
            // TODO more investigation of the code bellow is needed to support layout object type generally
            return;
        }

        const children = me.children(),
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

        // Convert hbox/middle <-> vbox/center
        var alignKey = 'container|align';
        if (value == 'hbox' && me.hasCfgValue(alignKey, 'center')) {
            me.setCfgValue(alignKey, 'middle');
        }
        if (value == 'vbox' && me.hasCfgValue(alignKey, 'middle')) {
            me.setCfgValue(alignKey, 'center');
        }
        // Convert hbox/top <-> vbox/left
        if (value == 'hbox' && me.hasCfgValue(alignKey, 'left')) {
            me.setCfgValue(alignKey, 'top');
        }
        if (value == 'vbox' && me.hasCfgValue(alignKey, 'top')) {
            me.setCfgValue(alignKey, 'left');
        }

    },

    onCfgChange: function(name, value, oldValue) {
        var me = this;

        switch (name) {
            case 'layout':
                me.onLayoutChange(value, oldValue);
                break;
            case 'floating':
                //remove region if floating is selected
                if (me.hasCfg('layout|region') && value) {
                    me.clearCfgValue('layout|region');
                }
                break;
            case 'layout|region':
                //remove floating if region is selected
                if (me.hasCfg('floating') && value) {
                     me.clearCfgValue('floating');
                }
                break;
        }
    },

    onFlyout: function() {
        var me = this,
            items = [];

        var checkLayout = function(layout) {
            return me.hasCfgValue('layout', layout);
        };

        if (me.hasCfg('layout') && !me.flyCfg('layout').isHidden()) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Select a layout',
                data: me.flyCfg('layout').getEditorOptionsData(),
                bindTo: {
                    name: 'layout',
                    event: 'select',
                    defaultValue: 'auto'
                }
            });
        }

        if (checkLayout('hbox') || checkLayout('vbox')) {
            if (me.hasCfg('container|align')) {
                items.push({
                    xtype: 'flyoutselect',
                    fieldLabel: 'Alignment',
                    data: me.flyCfg('container|align').getEditorOptionsData(),
                    bindTo: {
                        name: 'container|align',
                        event: 'select'
                    }
                });
            }
            if (me.hasCfg('container|pack')) {
                items.push({
                    xtype: 'flyoutselect',
                    fieldLabel: 'Pack',
                    data: me.flyCfg('container|pack').getEditorOptionsData(),
                    bindTo: {
                        name: 'container|pack',
                        event: 'select'
                    }
                });
            }
        }

        if (!me.isLinkedInstance && checkLayout('card')) {
            var cards = [], idx = 0, value,
                cn = me.children().filter(me.getLayoutDefinition().isCardItem);
            for (var i = 0, c; c = cn[i]; i++) {
                value = String.format("{0} - {1}", idx, c.getCfgValue('title') || '<No Title Set>');
                cards.push(value);
                idx++;
            }
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Active Item',
                data: cards,
                bindTo: {
                    name: 'activeItem',
                    event: 'select',
                    get : function(){
                        var val = me.getCfgValue('activeItem');
                        if (Ext4.isString(val)) {
                            Ext4.Array.each(cn, function(card, i) {
                                if (card.getCfgValue('id') === val) {
                                    val = i;
                                    return false;
                                }
                            });
                        }
                        val = Ext4.isNumber(val) ? val : 0;
                        return cards[val];
                    },
                    set: function(c){
                        var index = cards.indexOf(c.getValue());
                        me.setCfgValue('activeItem', index);
                    }
                }
            });
        }

        if (checkLayout('absolute') && me.hasCfg('designer|snapToGrid')) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Snap to grid',
                data: [['(none)', null], 5, 10, 15, 20],
                bindTo: {
                    name: 'designer|snapToGrid',
                    event: 'select',
                    set: function(c) {
                        me.setSnapToGrid(c.getValue());
                    }
                }
            });
        }

        return items;
    }
});
