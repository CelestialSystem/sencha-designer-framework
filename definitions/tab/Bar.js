xds.component.Registry.addDefinition({
    override: "Ext.tab.Bar",
    typeAlias: "tabbar",

    "autoName": "MyTabBar",
    "toolbox": null,
    "iconCls": "icon-tab-bar",
    validParentTypes: ['tabpanel'],
    validChildTypes: [],
    disablePromoteToClass: true,
    disableDuplication: true,
    transformGroup: null,

    cfgs: [{
        name: "activeTab",
        merge: true,
        type: "auto" // can't take Ext.Component
    }, {
        "name": "layout",
        "type": "string",
        "defaultValue": "hbox",
        merge: false,
        editor: "combo",
        options: xds.component.Registry.getAllVisibleLayouts(),
        alternates: [{
            type: 'object'
        }]
    }],

    "ignoreCfgs": ["title", "tpl", "tplWriteMode", "data"],

    inlineEdit: [{
        // xdsInlineEditCfgOwnerId is set in tabpanel's canvasconfig listener
        cfg: 'title',
        textEl: '.x-tab > .x-button-label'
    }],

    init: function() {
        var me = this;
        me.setReference('tabBar');
    },

    getDisplayName: function() {
        return "Tab Bar";
    }

});
