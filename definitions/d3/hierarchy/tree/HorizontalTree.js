xds.component.Registry.addDefinition({
    override: "Ext.d3.hierarchy.tree.HorizontalTree",
    typeAlias: 'd3-tree',

    toolbox: {
        name: 'D3 Tree',
        iconCls: 'icon-d3-tree',
        category: 'D3 Hierarchy',
        groups: ['Premium']
    },

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            nodeRadius: '5',
            nodeSize: '[20, 100]',
            width: '400'
        });

        this.createChild({
            type: 'd3ColorAxis',
            data: {
                field: 'value'
            }
        });
    }
});