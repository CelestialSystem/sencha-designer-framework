xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.SideBar",
    inherits: 'Ext.Panel',
    typeAlias: 'calendarsidebar',

    autoName: 'MySideBar',
    initialTitle: null,

    init: function() {
        this.setReference('sideBar');
    }
});
