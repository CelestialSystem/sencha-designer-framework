xds.component.Registry.addDefinition({
    override: "Ext.Component",
    typeAlias: 'component',

    canvasAlias: 'widget.xdcomponent',
    toolbox: {
        name: 'Component',
        iconCls: 'icon-component',
        category: 'Standard'
    },

    mixin: [
        'baseview',
        'idbehavior',
        'inlineeditbehavior',
        'controllable',
        'viewbehavior',
        'Ext.mixin.Responsive'
    ],

    validChildTypes: [],
    ignoreLayoutCfgs: false,

    /**
     * By default when components are rendered at the canvas top-level, and they do
     * not have explicit dimensions set, we want them rendered as fullscreen. However
     * some components (e.g. buttons) we want to always render at intrinsic size. The
     * fullscreenAtTopLevel property is used by the Canvas to determine whether the
     * top-level renderCt is given 'fit' layout to automatically expand the instance
     * to fullscreen, or 'auto' layout otherwise.
     */
    fullscreenAtTopLevel: true,

    reservedMembers: ['initConfig'],

    obscureCfgs: [
        'autoEl',
        'baseCls',
        'componentCls',
        'disabledCls',
        'loader',
        'renderTpl',
        'renderSelectors',
        'renderData',
        'renderTpl',
        'toFrontOnShow'
    ],
    ignoreCfgs: [
        'plugins',
        'xtype',
        'columnWidth', // added by column layout
        'formBind', // added by setupFormBind in AbstractComponent definition
        'region' // added by border layout
    ],

    cfgs: [{
        name: 'draggable',
        merge: true,
        alternates: [{
            type: 'object',
            primitive: true //object-form draggable doesn't work if set in initComponent
        }]
    },{
        name: "scrollable",
        merge: true,
        type: "auto",
        allowBoolean: true,
        editor: "combo",
        options: [
            ['false', false],
            ['true', true],
            ['horizontal', 'horizontal'],
            ['vertical', 'vertical'],
            ['both', 'both']
        ]
    },{
        name: 'resizeHandles',
        merge: true,
        editor: 'options',
        options: [
            'all',
            'e',
            'n',
            'ne',
            'nw',
            's',
            'se',
            'sw',
            'w'
        ]
    }, {
        name: 'designer|initialView',
        displayName: 'initialView',
        group: xds.architectGroup,
        type: 'boolean',
        visibleOnlyAsTop: true,
        defaultValue: false
    },{
        name: 'autoRender',
        merge: true,
        alternates:[{
            type: 'object'
        }]
    },{
        name: 'data',
        merge: true,
        mock: false
    },{
        name: 'hideMode',
        merge: true,
        editor: 'options',
        options: [
            'display',
            'offsets',
            'visibility'
        ]
    },{
        name: 'id',
        merge: true,
        regex: xds.Resource.get('validId').regex,
        regexText: xds.Resource.get('validId').regexText
    },{
        name: 'itemId',
        merge: true,
        regex: xds.Resource.get('validId').regex,
        regexText: xds.Resource.get('validId').regexText
    },{
        name: 'maxHeight',
        merge: true,
        minValue: 0
    },{
        name: 'maxWidth',
        merge: true,
        minValue: 0
    },{
        name: 'minHeight',
        merge: true,
        minValue: 0
    },{
        name: 'minWidth',
        merge: true,
        minValue: 0
    },{
        name: 'shrinkWrap',
        merge: true,
        type: 'number',
        editor: 'options',
        options: [
            [xds.Resource.get('shrinkWrap')['0'], 0],
            [xds.Resource.get('shrinkWrap')['1'], 1],
            [xds.Resource.get('shrinkWrap')['2'], 2],
            [xds.Resource.get('shrinkWrap')['3'], 3]
        ]
    },{
        name: 'tpl',
        merge: false,
        type: 'template'
    },{
        name: 'tplWriteMode',
        merge: true,
        editor: 'options',
        options: [
            'append',
            'insertAfter',
            'insertBefore',
            'insertFirst',
            'overwrite'
        ]
    },{ // DSGNR-7515, EXTJS-23318
        name: "rtl",
        type: "boolean"
    }],

    hasThemingSupport: true,


    init: function() {
        var me = this;

        // Any component that is added as a descendant to an Ext.form.Panel should receive a "formBind" config.
        // If/When the component is no longer a descenant of an Ext.form.Panel, the "formBind" config should be removed.
        me.ex('setup', me.onSetup, me);
        me.on({
            flyout: me.onFlyout,
            resizehandles: me.onResizeHandles,
            beforecfgchange: me.onBeforeCfgChange,
            cfgchange: me.onCfgChange,
            canvasconfig: me.onCanvasConfig,
            create: me.onCreate,
            restore: me.onRestore,
            move: me.onMove,
            shadowload: me.onShadowLoad,
            scope: me
        });
    },

    checkBorderLayout: function(name, value, oldValue) {
        var me = this,
            parent = me.parent(),
            region, isOtherCenterRegion, undef;

        if (parent && parent.hasCfgValue('layout', 'border')) {
            // When changing the region, unset the dimension(s) that always stretch to the container size.
            // The resizable dimension is defaulted to 150 so it doesn't collapse.
            if (name === 'layout|region') {
                // Don't allow more than one center region
                isOtherCenterRegion = function(sibling) {
                    return sibling !== me && sibling.getCfgValue('layout|region') === 'center';
                };
                if (value === 'center' && parent.children().filter(isOtherCenterRegion).length) {
                    xds.ui.Ack.display(xds.Resource.get('borderLayout').singleCenter);
                    return false;
                }

                me.settingDimension = true;
                me.setCfgValue('width', (value === 'west' || value === 'east') ? (me.getCfgValue('width') || me.getCfgValue('height') || 150) : undef);
                me.setCfgValue('height', (value === 'north' || value === 'south') ? (me.getCfgValue('height') || me.getCfgValue('width') || 150) : undef);
                delete me.settingDimension;
            }
            // Don't allow setting of dimensions that always stretch to the container size
            else if (!me.settingDimension) {
                region = me.getCfgValue('layout|region');
                if (value != null &&
                    ((name === 'width' && region !== 'west' && region !== 'east') ||
                    (name === 'height' && region !== 'north' && region !== 'south'))) {
                    return false;
                }
            }
        }
    },

    onBeforeCfgChange: function(name, value, oldValue) {
        var me = this,
            i18n, cfg, tag;

        switch (name) {
            case 'height':
            case 'width':
            case 'layout|region':
                return me.checkBorderLayout(name, value, oldValue);
            case 'dock':
                // parent with an accordion layout and the component is not a panel it must remain docked
                if (me.getParentLayoutValue() === 'accordion' && !me.isType('panel')) {
                    if (!value) {
                        // we won't allow them to remove docking in an accordion layout
                        i18n = xds.Resource.get('validation').abstractComponent;
                        xds.ui.Ack.display(i18n.nonPanelInAccordionMustRemainDocked);
                        return false;
                    }
                }
                // Clear out any region config, since dock takes precedence anyways.
                if (me.isCfgSet('layout|region')) {
                    me.setCfgValue('layout|region', undefined);
                }
                break;
            // prevent setting initialView flag on non-top-level components
            case 'designer|initialView':
                return !value || this.isTop();
            // validate autoEl is a valid tag or an object with a valid tag as its 'tag' property
            case 'autoEl':
                i18n = xds.Resource.get('validTags');
                // null and undefined are ok
                if (value != null) {
                    // If the old value was an object, try to extract the object's 'tag' property value
                    cfg = me.getCfg('autoEl');
                    if (cfg.isObject && cfg.parseValueType(value).type === 'object') {
                        tag = value.match(/\btag['"]?\s*:\s*['"](\w+)['"]/);
                        if (tag) {
                            tag = tag[1];
                        }
                    } else {
                        tag = value;
                    }
                    if (Ext4.isString(tag) && !i18n.regex.test(tag)) {
                        xds.ui.Ack.display(i18n.regexText);
                        return false;
                    }
                }
                break;
        }
    },

    onCreate: function() {
        var me = this,
            topViews;

        // When added as the first top-level component, set as the initialView automatically
        if (me.isTop()) {
            topViews = xds.component.Registry.getRootInstance().query('> baseview');
            if (topViews.length === 1 && topViews[0] === me) {
                me.setInitialView(true);
            }
        }

        me.setupFormBind();
    },

    onSetup: function() {
        if (!this.parent()) {
            this.setCfgValue({
                width: 400,
                height: 250
            });
        }
    },

    onShadowLoad: function() {
        if (this.isTop()) {
            this.onInitialViewChange(this.isInitialView());
        }
    },

    onRestore: function() {
        if (this.isTop()) {
            this.onInitialViewChange(this.isInitialView());
        }

        this.setupFormBind();
    },


    onCanvasConfig: function(config) {
        this.checkDuplicateCanvasConfigId(config);

        // Add the instance id as a custom config, this will be picked up by the overrides and
        // will be the only way for a rendered component to link back to its definition instance.
        if (this.top() === xds.canvas.topInstance) {
            config.xdsInstanceId = this.getId();
        }

        // Top level components are never shown hidden on the canvas.
        if (config.hidden && this.isTop()) {
            config.hidden = false;
        }

        // Should never be enabled within the Designer canvas
        config.stateful = false;

        // renderTo should not be used in our canvas, do not honor it.
        delete config.renderTo;

        if (config.contentEl) {
            config.html = config.html || '';
            // stick the content after the html content
            config.html += ' ' + String.format("Setting content from contentEl: '{0}'", config.contentEl);
            // delete contentEl config so the component init doesnt fail on contentEl lookup
            delete config.contentEl;
        }
        return config;
    },

    onMove: function(oldParentInstance, newParentInstance) {

        // When moving a top-level component within another component, transfer initialView flag to parent
        if (!this.isTop() && this.isInitialView()) {
            this.setInitialView(false);
            newParentInstance.setInitialView(true);
        }
        this.setupFormBind();
    },

    onInitialViewChange: function(isInitialView) {
        var me = this,
            app = xds.project.application,
            key = 'initialViewMessage',
            message = xds.Resource.get(key);

        message.id = key;

        if (isInitialView && me.isTop()) {
            me.addMessage(message);

            // Only one class can be marked as the initial view, so unset all others
            xds.component.Registry.getRootInstance('component').children().forEach(function(cmp) {
                var instance = cmp.getInstance();
                if (instance !== me) {
                    instance.setInitialView(false);
                }
            });
        } else {
            me.removeMessage(key);
        }

        app.updateInitialViewMessage();
    },

    onFlyout: function() {
        var me = this,
            parent = me.parent(),
            ref = me.getReference(),
            items = [];

        var checkParentLayout = function(layout) {
            return parent.hasCfgValue('layout', layout);
        };

        if (me.hasCfg('autoScroll')) {
            items.push({
                xtype: 'checkbox',
                boxLabel: 'autoScroll',
                hideLabel: true,
                bindTo: {
                    name: 'autoScroll',
                    event: 'check'
                }
            });
        }

        if (me.hasCfg('layout|flex') && parent && ['vbox', 'hbox', 'border'].some(checkParentLayout)) {
            items.push({
                xtype: 'numberfield',
                fieldLabel: 'Flex',
                bindTo: 'layout|flex'
            });
        }

        // Only show the border layout region menu if we are an item under the border layout
        // i.e. dockedItems and other reference items should not show this menu
        if (parent && checkParentLayout('border') && ref.name === 'items'){
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Select a region',
                data: ['north', 'east', 'center', 'south', 'west'],
                bindTo: {
                    name: 'layout|region',
                    event: 'select'
                }
            });
        }

        if (me.hasCfg('dock')){
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Dock in parent',
                data: [['(none)', null], 'top', 'bottom', 'left', 'right'],
                bindTo: {
                    name: 'dock',
                    event: 'select'
                }
            });
        }

        if (me.hasCfg('store') && me.flyCfg('store').getType() === 'store') {
            items.push({
                xtype: 'xds-storeflyoutselect'
            });
        }

        return items;
    },

    onResizeHandles: function(direction) {
        var me = this,
            parent = me.parent();

        if (!parent) {
            return true;
        }

        var checkLayout = function(layout) {
            return parent.hasCfgValue('layout', layout);
        };

        // When within border layout, don't allow resizing in the directions that always stretch to the container size
        if (checkLayout('border')) {
            var region = me.getCfgValue('layout|region');
            if ((direction !== 'Bottom' && region !== 'west' && region !== 'east') ||
                (direction !== 'Right' && region !== 'north' && region !== 'south')) {
                return false;
            }
        }

        return !(
            ['fit', 'card'].some(checkLayout) ||
            (['form', 'anchor', 'absolute'].some(checkLayout) && me.isCfgSet('anchor')) ||
            (['hbox', 'vbox'].some(checkLayout) && me.isCfgSet('flex'))
        );
    },

    hasWidthFromParentLayout: function() {
        var me = this,
            parent = me.parent(),
            layout;

        if (!parent) {
            // Top-level instances are either rendered within a fit or auto layout, both of
            // which give the instance full width
            return false;
        }
        else {
            layout = parent.getCfgValueOrDefault('layout');
            if (layout && (
                layout == 'fit' || layout == 'card' || layout == 'accordian' || layout == 'border' ||
                (layout == 'vbox' && parent.getCfgValueOrDefault('container|align') == 'stretch') ||
                (layout == 'hbox' && me.isCfgSet('layout|flex')) ||
                (layout == 'anchor' && me.isCfgSet('anchor'))
            )) {
                return true;
            }
        }

        return false;
    },

    hasHeightFromParentLayout: function() {
        var me = this,
            parent = me.parent(),
            layout;

        if (!parent) {
            // Top-level instances rendered are given full height if fullscreenAtTopLevel:true
            return me.fullscreenAtTopLevel;
        }
        else {
            layout = parent.getCfgValueOrDefault('layout');
            if (layout && (
                layout == 'fit' || layout == 'card' || layout == 'border' ||
                (layout == 'hbox' && parent.getCfgValueOrDefault('container|align') == 'stretch') ||
                (layout == 'vbox' && me.isCfgSet('layout|flex')) ||
                (layout == 'accordian' && me.isCfgSet('fill')) ||
                (layout == 'anchor' && me.isCfgSet('anchor'))
            )) {
                return true;
            }
        }

        return false;
    },


    onCfgChange: function(name, value) {
        var me = this,
            undef;
        switch (name) {
            // autoScroll and overflowX/Y cannot be used together
            case 'autoScroll':
                if (value) {
                    me.setCfgValue('overflowX', undef);
                    me.setCfgValue('overflowY', undef);
                }
                break;
            case 'overflowX':
            case 'overflowY':
                if (value) {
                    me.setCfgValue('autoScroll', undef);
                }
                break;
            case 'designer|initialView':
                this.onInitialViewChange(value);
                break;
        }
    },

    setupFormBind: function() {
        var me = this,
            hasConfig = me.hasCfg('formBind');

        // First determine if we need to add the formBind config or remove it
        if (me.up('form')) {
            if (!hasConfig) {
                // We have an ancestor Ext.form.Panel, and don't already have the formBind config...add it!
                me.addCfg({
                    name: 'formBind',
                    type: 'boolean',
                    group: 'Ext.form.Panel'
                });
            }
        } else if (hasConfig) {
            // We aren't under an Ext.form.Panel but have a formBind config...remove it!
            me.setCfgValue('formBind', undefined);
            me.removeCfg('formBind');
        }
    }

});

