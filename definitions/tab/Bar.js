xds.component.Registry.addDefinition({
    override: "Ext.tab.Bar",
    typeAlias: "tabbar",

    autoName: "MyTabBar",

    iconCls: "icon-tab-bar",
    validParentTypes: ['tabpanel'],
    validChildTypes: [],
    disablePromoteToClass: true,
    disableDuplication: true,
    transformGroup: null,

    ignoreCfgs: ["title", "tpl", "tplWriteMode", "data"],

    cfgs: [{
        name: 'layout',
        merge: true,
        alternates: [{
            type: 'object'
        }]
    }, {
        // TODO remove it when DSGNR-7219 is done
        "name": "tabRotation",
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

    init: function() {
        var me = this;
        me.setReference('tabBar');
    },

    getDisplayName: function() {
        return "Tab Bar";
    }

});
