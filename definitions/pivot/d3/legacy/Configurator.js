xds.component.Registry.addDefinition({
    type: 'Ext.pivot.d3.legacy.Configurator',
    inherits: 'Ext.pivot.plugin.Configurator',
    typeAlias: 'pivotd3configurator',
    autoName: 'MyPivotD3Configurator',

    toolbox: {
        name: 'Configurator',
        iconCls: 'icon-pivot-d3-configurator',
        category: 'Pivot D3',
        groups: ['Premium']
    },

    init: function() {
        var me = this;

        me.setReference({name: 'configurator', type: 'object'});
    }
});