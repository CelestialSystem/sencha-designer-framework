xds.component.Registry.addDefinition({
    override: 'Ext.pivot.filter.Label',
    typeAlias: 'pivotfilter.label',
    autoName: 'MyFilterLabel',

    toolbox: {
        name: 'Filter label',
        iconCls: 'icon-pivot-filter-label',
        category: 'Pivot grid configs',
        groups: ['Premium']
    }
});
