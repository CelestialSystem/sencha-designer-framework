xds.component.Registry.addDefinition({
    override: "Ext.d3.hierarchy.TreeMap",
    typeAlias: 'd3-treemap',

    toolbox: {
        name: 'D3 Treemap',
        iconCls: 'icon-d3-treemap',
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