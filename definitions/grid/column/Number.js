xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Number",
    typeAlias: 'numbercolumn',

    toolbox: {
        name: "Number Column",
        iconCls: "icon-grid-num",
        category: "Grid Columns",
        groups: ["Grids"]
    },
    autoName: 'MyNumberColumn'
});
