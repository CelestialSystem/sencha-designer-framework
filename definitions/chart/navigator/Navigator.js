xds.component.Registry.addDefinition({
    override: 'Ext.chart.navigator.Navigator',

    toolbox: {
        name: 'Chart Navigator',
        iconCls: 'icon-line-chart',
        category: 'Charts',
        groups: ['Charts']
    },

    init() {
        var me = this;
        me.on({
            validate: me.onValidate,
            scope: me
        });
    },

    onValidate() {
        if (!this.isCfgSet('axis')) {
            return xds.Resource.get('validation').navigatorMissingAxis;
        }
    }
});
