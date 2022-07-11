xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.TitleBar",
    inherits: 'Ext.toolbar.Toolbar',
    typeAlias: 'calendartitlebar',

    autoName: 'MyTitleBar',

    init: function() {
        this.setReference('titleBar');
    }
});
