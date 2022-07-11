xds.component.Registry.addDefinition({
    override: 'Ext.pivot.filter.Label',
    typeAlias: 'pivotfilter.label',
    autoName: 'MyFilterLabel',

    toolbox: {
        name: 'Filter label',
        iconCls: 'icon-pivot-d3-configurator',
        category: 'Pivot grid configs',
        groups: ['Premium']
    }
});
