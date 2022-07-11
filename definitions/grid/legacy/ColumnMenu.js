xds.component.Registry.addDefinition({
    type: "Ext.grid.legacy.ColumnMenu",
    inherits: 'Ext.menu.Menu',
    typeAlias: 'gridcolumnmenu',
    autoName: 'MyColumnMenu',

    init: function() {
        var me = this;

        me.clearListeners();
        me.setReference('columnMenu');
    }
});