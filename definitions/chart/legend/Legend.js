xds.component.Registry.addDefinition({
    override: "Ext.chart.legend.Legend",
    typeAlias: 'chartlegend',

    validParentTypes: ['abstractchart'],
    validChildTypes: [],

    toolbox: {
        name: 'Legend',
        iconCls: 'icon-legend',
        category: 'Charts',
        groups: ['Charts']
    },

    ignoreCfgs: ['store'],

    init: function() {
        var me = this;
        me.setReference('legend');
        me.ex('setup', Ext4.emptyFn); //prevent creation of child itemTpl
    }

});
