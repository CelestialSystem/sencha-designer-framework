xds.component.Registry.addDefinition({
    override: "Ext.chart.series.StackedCartesian",

    cfgs: [
        // overriding title/yFields from superclass to allow multiple values
        // see touch bug https://sencha.jira.com/browse/TOUCH-4988
        {
            name: 'title',
            type: 'typedarray'
        },
        {
            name: 'yField',
            type: 'typedarray',
            memberConfig: {
                type: 'datafield',
                storeOwnerSelector: '^abstractchart'
            }
        }
    ]
});
