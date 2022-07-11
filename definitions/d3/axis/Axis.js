xds.component.Registry.addDefinition({
    override: 'Ext.d3.axis.Axis',
    typeAlias: 'd3Axis',
    mixin: ['baseview'],

    validParentTypes: ['d3-heatmap']
});