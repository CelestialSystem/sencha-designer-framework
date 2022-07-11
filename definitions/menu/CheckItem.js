xds.component.Registry.addDefinition({
    override: "Ext.menu.CheckItem",
    typeAlias: 'menucheckitem',

    toolbox: {
        name: 'Check Menu Item',
        iconCls: 'icon-check-item',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },

    ignoreCfgs: [
        'scope'
    ],

    cfgs: [{
        name: 'checkHandler',
        merge: true,
        allowOnViewController: true
    }]
});
