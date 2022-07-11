xds.component.Registry.addDefinition({
    override: "Ext.tab.Tab",
    typeAlias: "tab",

    autoName: "TabConfig",
    toolbox: null,
    iconCls: "icon-tab-bar",
    validChildTypes: [],
    transformGroup: null,

    // Do not give the tab instance the configs of its parent's layout
    ignoreLayoutCfgs: true,

    ignoreCfgs: [
        'componentLayout',
        'text',
        'handler',
        'functionsRefGroup',
        'menu'
    ],

    cfgs: [{
        // TODO remove it when DSGNR-7219 is done
        "name": "rotation",
        merge: false,
        "type": "string",
        "defaultValue": "default",
        "bindable": true,
        "alternates": [
            {
                type: 'number',
                "editor": "options",
                "options": [0, 1, 2]
            }
        ]
    }],

    inlineEdit: [{
        cfg: 'title',
        textEl: '.x-tab-inner',
        dblClickEl: '*'
    }],

    init: function() {
        var me = this;
        me.clearListenersByEvent('flyout', 'create');
        me.on({
            beforeactionmenu: me.onActionMenu,
            beforemove: me.onBeforeMove,
            canvasconfig: me.onCanvasConfig,
            codeconfig: me.onCodeConfig,
            resizehandles: me.onResizeHandles,
            validparent: me.onValidParent,
            scope: me
        });
        me.setReference({name: 'tabConfig', type: 'object'});

        // Since tabs are rendered within a container with hbox layout, give them the hbox-child configs
        xds.layouts.HBox.cfgs.forEach(me.addCfg, me);
    },

    // Disable context menu for Tab instance
    onActionMenu: function() {
        return false;
    },

    // Dont allow any moves for Tab instance
    onBeforeMove: function() {
        return false;
    },

    onCanvasConfig: function(config) {
        // Add the id of the tab's parent instance as the target for inline edit cfg changes
        config.xdsInlineEditCfgOwnerId = this.parent().getId();
        return config;
    },

    // Dont create any tabConfig if no properties configured
    onCodeConfig: function(config) {
        // designer| configurations are not passed in codeconfig
        // bc designer|createAlias affects codegen we need to check it as well
        // we must also check if config.bindRef exists - setting any bind references means we need codegen
        if (config.configs.length === 0 && !config.bindRef && !this.hasChildren() && !this.isCfgSet('designer|createAlias')) {
            return false;
        }
        return config;
    },

    // Only allow resizing width
    onResizeHandles: function(side) {
        return side === 'Right';
    },

    onValidParent: function(parent) {
        // Only allow as the grandchild of a tabpanel. This will cause it to be removed
        // if it's restored into a non-tabpanel grandparent, e.g. when the tabpanel is
        // transformed to something else.
        var grandparent = parent ? parent.parent() : null;
        return !!grandparent && grandparent.isType('tabpanel');
    }
});
