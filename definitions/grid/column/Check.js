xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Check",
    typeAlias: 'checkcolumn',

    toolbox: {
        name: "Check Column",
        iconCls: "icon-grid-check",
        category: "Grid Columns",
        groups: ["Grids"]
    },

    autoName: 'MyCheckColumn',

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;

        if (!me.isCfgSet('width')) {
            me.setCfgValue('width', 50);
        }

        if (!me.isCfgSet('text')) {
            me.setCfgValue('text', '');
        }
    }
});