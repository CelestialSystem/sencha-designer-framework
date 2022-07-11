xds.component.Registry.addDefinition({
    override: 'Ext.pivot.d3.Container',
    typeAlias: ['pivotd3container'],

    toolbox: {
        name: 'Pivot D3 container',
        iconCls: 'icon-pivot-d3-container',
        category: 'Pivot D3',
        groups: ['Premium']
    },

    validChildTypes: ['pivotmatrix.local', 'pivotmatrix.remote', 'pivotheatmap', 'pivottreemap', 'pivotd3configurator'],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            layout: 'fit',
            width: '600',
            height: '400'
        });
    }
});
