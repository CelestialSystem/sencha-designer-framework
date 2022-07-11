xds.component.Registry.addDefinition({
    override: "Ext.menu.Separator",
    typeAlias: 'menuseparator',

    toolbox: {
        name: 'Menu Separator',
        iconCls: 'icon-separator-menu',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },
    validChildTypes: [],

    obscureCfgs: ['separatorCls'],

    ignoreCfgs: [
        'eventsRefGroup',
        'handler'
    ],

    init: function() {
        var me = this;

        me.on('validchild', function() { return false; });
    }
});