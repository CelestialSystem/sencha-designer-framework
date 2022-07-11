xds.component.Registry.addDefinition({
    override: "Ext.grid.menu.ShowInGroups",
    typeAlias: 'gridshowingroupsmenuitem',

    toolbox: {
        name: 'Grid ShowInGroups Menu Item',
        iconCls: 'icon-menuitem',
        category: 'Menu',
        groups: ['Menus', 'Grids']
    },

    init() {
        var me = this;
        me.on('setup', me.onSetup, me);
        me.on('childreference', me.onChildReference, me);
        me.setReference('columnMenu');
    },

    onSetup: function() {
        this.clearCfgValue('text');
    },

    onChildReference: function() {
        return 'showInGroups';
    }
});
