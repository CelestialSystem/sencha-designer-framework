xds.component.Registry.addDefinition({
    override: "Ext.chart.CartesianChart",
    typeAlias: 'cartesian',

    toolbox: {
        // name and iconCls omitted so it does not appear as its own toolbox item, but still defines
        // a category so the BuiltIn chart types can use it as default when saving back to the toolbox
        category: 'Charts'
    }
});
