xds.component.Registry.addDefinition({
    override: "Ext.dataview.ListItem",

    toolbox: {
        name: 'Data View List Item',
        iconCls: 'icon-dataview',
        category: 'Views',
        groups: ['Views', 'Containers']
    },

    reservedCfgs: ['dataMap'],

    ignoreCfgs: [
        'dataMap'
    ]
});
