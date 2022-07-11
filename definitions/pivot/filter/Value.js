xds.component.Registry.addDefinition({
    override: 'Ext.pivot.filter.Value',
    typeAlias: 'pivotfilter.value',
    autoName: 'MyFilterValue',

    toolbox: {
        name: 'Filter value',
        iconCls: 'icon-pivot-filter-value',
        category: 'Pivot grid configs',
        groups: ['Premium']
    }
});
