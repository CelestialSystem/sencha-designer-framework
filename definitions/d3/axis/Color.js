xds.component.Registry.addDefinition({
    override: 'Ext.d3.axis.Color',
    typeAlias: 'd3ColorAxis',
    autoName: 'MyColorAxis',
    mixin: ['baseview'],

    toolbox: {
        iconCls: 'icon-axis',
    },

    validParentTypes: ['d3-svg', 'pivotheatmap'],

    cfgs: [
    {
        name: 'scale',
        merge: true,
        alternates: [{
            type: 'object'
        }]
    },
    {
        name: 'field',
        merge: false,
        type: 'datafield',
        storeOwnerSelector: '^pivotheatmap'
    }],

    init: function() {
        var me = this;
        me.setReference({ name: 'colorAxis', type: 'object' });
    }
});