xds.component.Registry.addDefinition({
    override: "Ext.calendar.view.Weeks",
    typeAlias: 'calendarviewweeks',

    init: function() {
        this.setReference('view');
    }
});
