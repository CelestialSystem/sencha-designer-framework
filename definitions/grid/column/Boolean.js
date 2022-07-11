xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Boolean",
    typeAlias: 'booleancolumn',

    toolbox: {
        name: "Boolean Column",
        iconCls: "icon-grid-bool",
        category: "Grid Columns",
        groups: ["Grids"]
    },
    autoName: 'MyBooleanColumn'
});
