xds.component.Registry.addDefinition({
    override: "Ext.menu.CheckItem",
    typeAlias: 'menucheckitem',

    toolbox: {
        name: 'Check Item',
        iconCls: 'icon-check-item',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },

    obscureCfgs: ['checkedCls', 'groupCls', 'uncheckedCls'],
    ignoreCfgs: [
        'scope'
    ],

    cfgs: [{
        name: 'checkHandler',
        merge: true,
        params: [
            {
                "name": "menucheckitem",
                "type": "Ext.menu.CheckItem"
            },
            {
                "name": "checked",
                "type": "Boolean"
            },
            {
                "name": "options",
                "type": "Object"
            }
        ],
        allowOnViewController: true
    }]
});