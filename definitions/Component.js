xds.component.Registry.addDefinition({
    override: "Ext.Component",
    typeAlias: "component",

    "toolbox": {
        "name": "Component",
        "iconCls": "icon-component",
        "category": "Standard",
        "groups": ["Views"]
    },

    // Allowing children with an empty list of valid child types allows adding of
    // only basiceventbinding children and nothing else by default.
    "validChildTypes": [],

    /**
     * By default when components are rendered at the canvas top-level, we want them
     * rendered as fullscreen, however some (e.g. buttons and fields) we do not. The
     * fullscreenAtTopLevel property is used by the Canvas to determine whether the
     * top-level renderCt is given 'fit' layout to automatically expand the instance
     * to fullscreen, or 'auto' layout otherwise.
     */
    "fullscreenAtTopLevel": true,

    mixin: ['baseview', 'idbehavior', 'inlineeditbehavior', 'controllable', 'viewbehavior'],

    ignoreLayoutCfgs: false,

    nonHoistableEvents: ['initialize', 'painted', 'resize'],

    obscureCfgs: ['renderTpl', 'baseCls', 'disabledCls', 'hiddenCls', 'styleHtmlCls', 'fullscreen'],

    ignoreCfgs: [
        'flex', // added by parent layout
        'plugins', // TODO allow adding plugins
        'record', // Must be a Model instance but we have no way of setting one
        'renderTo', // Cannot input an Element reference
        'xtype' // Not a settable config
    ],

    cfgs: [
        {
            name: 'designer|initialView',
            displayName: 'initialView',
            group: xds.architectGroup,
            type: 'boolean',
            visibleOnlyAsTop: true,
            defaultValue: false
        },
        {
            name: 'eventsRefGroup',
            displayName: 'Event Bindings',
            type: 'refgroup',
            group: xds.architectGroup,
            refSelector: '[type=basiceventbinding],[type=delegateeventbinding]', //check specific types to disallow subdefs
            createTypes: ['basiceventbinding', 'delegateeventbinding'],
            includeInLinkedInstance: true
        },
        {
            name: 'initialize',
            displayName: 'initialize',
            type: 'function',
            group: xds.architectGroup,
            params: [],
            defaultImplHandler: 'this.callParent();',
            isHidden: function() {
                return !this.owner.isTop();
            }
        },
        {
            name: "contentEl",
            merge: true,
            type: "string", // Can't input Element references so restrict to string
            alternates: null // do not merge alternates from generated definition
        },
        {
            name: "data",
            merge: true,
            mock: false
        },
        {
            name: 'docked',
            merge: true,
            editor: 'options',
            options: [
                ['(none)', null],
                'top',
                'bottom',
                'left',
                'right'
            ]
        },
        {
            name: 'fullscreen',
            merge: true,
            visibleOnlyAsTop: true //invalid to set fullscreen:true on a child
        },
        {
            name: "tpl",
            merge: true,
            type: "template" // TODO need to infer this; docs say String/String[]/Ext.Template[]/Ext.XTemplate[]
        },
        {
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
        },
        {
            name: 'hideAnimation',
            merge: true,
            alternates: [{
                type: 'object'
            }]
        },
        {
            name: 'showAnimation',
            merge: true,
            alternates: [{
                type: 'object'
            }]
        },
        {
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
            ],
            alternates: [{
                type: 'object'
            }]
        }
    ],


    init: function() {
        var me = this;

        me.on({
            flyout: me.onFlyout,
            beforecfgchange: me.onBeforeCfgChange,
            cfgchange: me.onCfgChange,
            canvasconfig: me.onCanvasConfig,
            resizehandles: me.onResizeHandles,
            create: me.onCreate,
            restore: me.onRestore,
            move: me.onMove,
            shadowload: me.onShadowLoad,
            scope: me
        });
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

        // Ignore the fullscreen config in the canvas
        delete config.fullscreen;

        if (config.contentEl) {
            config.html = config.html || '';
            // stick the content after the html content
            config.html += ' ' + String.format("Setting content from contentEl: '{0}'", config.contentEl);
            // delete contentEl config so the component init doesnt fail on contentEl lookup
            delete config.contentEl;
        }
        return config;
    },

    onFlyout: function() {
        var me = this,
            parent = me.parent(),
            items = [],
            uiConfig,
            themeInterface,
            uiOptions;

        var checkParentLayout = function(layout) {
            return parent.getCfgValueOrDefault('layout') === layout;
        };

        themeInterface = me.getComponentThemeInterface();

        uiConfig = me.flyCfg('ui');
        if (uiConfig && uiConfig.config.editor == 'combo' && themeInterface && themeInterface.getUis().length > 1) {

            uiOptions = themeInterface.getUis().map(function(ui){
                //touch has different default names
                var name = (ui.get('name') === 'default') ? uiConfig.getDefaultValue() : ui.get('name');
                return [name, ui.get('displayName')];
            });

            items.push({
                xtype: 'flyoutcombo',
                fieldLabel: 'UI Style',
                data: uiOptions,
                disableFilter: true,
                bindTo: {
                    name: 'ui',
                    event: ['change', 'select']
                }
            });
        }

        // Exclude flex flyout option for navigation bar children as it has no effect
        if (parent && !parent.isType('navigationbar') && me.hasCfg('layout|flex') &&
            ['vbox', 'hbox', 'toolbar'].some(checkParentLayout) && !me.getCfgValue('docked')) {
            items.push({
                xtype: 'numberfield',
                fieldLabel: 'Flex',
                bindTo: 'layout|flex'
            });
        }

        // Exclude docked flyout option for navigation bar children as its unnecessary for titlebar
        if (me.hasCfg('docked') && parent && !parent.isType('navigationbar')) {
            items.push({
                xtype: 'flyoutselect',
                fieldLabel: 'Dock in parent',
                data: me.flyCfg('docked').config.options,
                bindTo: {
                    name: 'docked',
                    event: 'select'
                }
            });
        }

        return items;
    },

    onBeforeCfgChange: function(name, value, oldValue) {
        switch (name) {
            // prevent setting initialView flag on non-top-level components
            case 'designer|initialView':
                return !value || this.isTop();
        }
    },

    onCfgChange: function(name, value) {
        var me = this;

        if (name === 'designer|initialView') {
            me.onInitialViewChange(value);
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
    },

    onMove: function(oldParentInstance, newParentInstance) {
        // When moving a top-level component within another component, transfer initialView flag to parent
        if (!this.isTop() && this.isInitialView()) {
            this.setInitialView(false);
            newParentInstance.setInitialView(true);
        }
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

    onResizeHandles: function() {
        return this.parent() &&
               ['fit', 'card'].indexOf(this.getParentLayout()) < 0;
    },

    getParentLayout: function() {
        var parent = this.parent();
        return parent ? parent.getCfgValueOrDefault('layout') : null;
    },

    hasWidthFromParentLayout: function() {
        var me = this,
            parent = me.parent(),
            layout;

        if (!parent) {
            // Top-level instances are either rendered within a fit or auto layout, both of
            // which give the instance full width
            return true;
        }
        else {
            layout = parent.getCfgValueOrDefault('layout');
            if (layout && (
                layout === 'fit' || layout === 'card' || layout === 'auto' ||
                (layout === 'vbox' && parent.getCfgValueOrDefault('container|align') === 'stretch') ||
                (layout === 'hbox' && me.isCfgSet('layout|flex'))
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
                layout === 'fit' || layout === 'card' ||
                (layout === 'hbox' && parent.getCfgValueOrDefault('container|align') === 'stretch') ||
                (layout === 'vbox' && me.isCfgSet('layout|flex'))
            )) {
                return true;
            }
        }

        return false;
    }

});
