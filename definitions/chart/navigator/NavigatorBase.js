xds.component.Registry.addDefinition({
    override: 'Ext.chart.navigator.NavigatorBase',
    typeAlias: 'navigatorbase',

    init() {
        this.setReference('navigator');
    }
});
