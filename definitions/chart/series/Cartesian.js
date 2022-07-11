xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Cartesian",
    typeAlias: 'cartesianseries',

    cfgs: [{
        name: 'xAxis',
        merge: true,
        memberConfig: {
            type: 'string',
            editor: 'options',
            options: ['left', 'right']
        }
    },{
        name: 'yAxis',
        merge: true,
        memberConfig: {
            type: 'string',
            editor: 'options',
            options: ['top', 'bottom']
        }
    }, {
        // Cartesian series may have a title per yField
        name: "title",
        type: "typedarray",
        collapseSingleValue: true,
        preventDuplicates: false
    }, {
        name: 'xField',
        merge: false,
        type: 'datafield',
        storeOwnerSelector: '^abstractchart'
    }, {
        name: 'yField',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'datafield',
            storeOwnerSelector: '^abstractchart'
        }
    }]
});
