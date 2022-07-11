xds.component.Registry.addDefinition({
    override: "Ext.grid.column.RowNumberer",
    typeAlias: 'rownumberer',

    toolbox: {
        name: "RowNumberer Column",
        iconCls: "icon-grid-rownumberer",
        category: "Grid Columns",
        groups: ["Grids"]
    },

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;

        if (!me.isCfgSet('width')) {
            me.setCfgValue('width', 50);
        }
    }
});