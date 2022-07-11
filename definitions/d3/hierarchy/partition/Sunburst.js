xds.component.Registry.addDefinition({
    override: "Ext.d3.hierarchy.partition.Sunburst",
    typeAlias: 'd3-sunburst',

    toolbox: {
        name: 'D3 Sunburst',
        iconCls: 'icon-d3-sunburst',
        category: 'D3 Hierarchy',
        groups: ['Premium']
    },

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.createChild({
            type: 'd3ColorAxis',
            data: {
                field: 'value'
            }
        });
    }
});