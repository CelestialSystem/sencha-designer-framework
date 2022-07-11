xds.component.Registry.addDefinition({
    override: "Ext.d3.svg.Svg",
    typeAlias: 'd3-svg',

    toolbox: {
        name: 'SVG',
        iconCls: 'icon-d3-svg',
        category: 'D3',
        groups: ['Premium']
    },

    cfgs: [
    {
        "name": "padding",
        "type": "auto",
        merge: true,
        "alternates": [{
            "type": "object"
        }]
    }],

    validChildTypes: [
        'Ext.d3.axis.Axis',
        'Ext.d3.axis.Color',
        'Ext.d3.interaction.Abstract'
    ]
});
