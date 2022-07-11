xds.component.Registry.addDefinition({
    override: "Ext.calendar.view.Month",
    typeAlias: 'calendarviewmonth',

    init: function() {
        this.setReference('view');
    }
});
