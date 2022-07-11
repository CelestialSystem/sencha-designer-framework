xds.component.Registry.addDefinition({
    override: "Ext.calendar.view.Day",
    typeAlias: 'calendarviewday',

    init: function() {
        this.setReference('view');
    }
});
