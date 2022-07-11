xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Text",
    typeAlias: 'textcolumn',

    toolbox: {
        name: "Text Column",
        iconCls: "icon-grid-column",
        category: "Grid Columns",
        groups: ["Grids"]
    },
    autoName: 'MyTextColumn'
});
