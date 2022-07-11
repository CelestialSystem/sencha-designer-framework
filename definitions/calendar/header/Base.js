xds.component.Registry.addDefinition({
    override: "Ext.calendar.header.Base",
    typeAlias: 'calendarheaderbase',

    init: function() {
        this.setReference('dayHeader');
    }
});
