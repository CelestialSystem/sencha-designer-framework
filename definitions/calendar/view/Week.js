xds.component.Registry.addDefinition({
    override: "Ext.calendar.view.Week",
    typeAlias: 'calendarviewweek',

    init: function() {
        this.setReference('view');
    }
});
