xds.component.Registry.addDefinition({
    override: "Ext.calendar.view.Days",
    typeAlias: 'calendarviewdays',

    init: function() {
        this.setReference('view');
    }
});
