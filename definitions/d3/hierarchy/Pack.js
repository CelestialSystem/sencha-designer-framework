xds.component.Registry.addDefinition({
    override: "Ext.d3.hierarchy.Pack",
    typeAlias: 'd3-pack',

    toolbox: {
        name: 'D3 Pack',
        iconCls: 'icon-d3-pack',
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