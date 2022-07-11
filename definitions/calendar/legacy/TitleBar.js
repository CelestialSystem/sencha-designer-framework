xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.TitleBar",
    inherits: 'Ext.Toolbar',
    typeAlias: 'calendartitlebar',

    autoName: 'MyTitleBar',

    init: function() {
        this.setReference('titleBar');
    }
});
