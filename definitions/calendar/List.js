xds.component.Registry.addDefinition({
    override: "Ext.calendar.List",
    typeAlias: 'calendarlist',

    init: function() {
        this.setReference('list');
    }
});
