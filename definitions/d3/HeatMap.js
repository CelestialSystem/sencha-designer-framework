xds.component.Registry.addDefinition({
    override: "Ext.d3.HeatMap",
    typeAlias: 'd3-heatmap',

    toolbox: {
        name: 'Heatmap',
        iconCls: 'icon-d3-heatmap',
        category: 'D3',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'store',
        merge: true,
        noneStore: '(heatmap-none)'
    },
    {
        name: "colorAxis",
        merge: false,
        type: 'refgroup',
        refSelector: 'd3ColorAxis',
        createTypes: ['d3ColorAxis'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    },
    {
        name: "xAxis",
        merge: false,
        type: 'refgroup',
        refSelector: 'd3XAxis',
        createTypes: ['d3XAxis'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    },
    {
        name: "yAxis",
        merge: false,
        type: 'refgroup',
        refSelector: 'd3YAxis',
        createTypes: ['d3YAxis'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            width: '400',
            height: '320',
            padding: '20 20 50 80'
        });

        this.createChild([{
            type: 'd3XAxis',
            data: {
                axis: {
                    ticks: 'd3.timeDay',
                    tickFormat: 'd3.timeFormat(\'%b %d\')',
                    orient: 'bottom'
                },
                scale: {
                    type: 'time'
                },
                title: {
                    text: 'Date'
                },
                field: 'date',
                step: 86400000
            }
        }, 
        {
            type: 'd3YAxis',
            data: {
                axis: {
                    orient: 'left',
                    tickFormat: 'd3.format(\'$d\')'
                },
                scale: {
                    type: 'linear'
                },
                title: {
                    text: 'Total'
                },
                field: 'bucket',
                step: 100
            }
        }, 
        {
            type: 'd3ColorAxis',
            data: {
                field: 'count',
                minimum: 0,
                scale: {
                    type: 'linear'
                }
            }
        }]);
    }
});
