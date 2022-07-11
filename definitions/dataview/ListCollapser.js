xds.component.Registry.addDefinition({
    override: "Ext.dataview.ListCollapser",

    toolbox: {
        name: 'Data View ListCollapser',
        iconCls: 'icon-dataview',
        category: 'Views',
        groups: ['Views', 'Containers']
    },

    reservedCfgs: ['dataMap'],

    ignoreCfgs: [
        'dataMap'
    ]
});
