xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.Switcher",
    inherits: 'Ext.SegmentedButton',
    typeAlias: 'calendarswitcher',

    autoName: 'MySwitcher',

    init: function() {
        this.setReference('switcher');
    }
});
