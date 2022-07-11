xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.PreviousButton",
    inherits: 'Ext.button.Button',
    typeAlias: 'calendarpreviousbutton',

    autoName: 'MyPreviousButton',

    cfgs: [{
        name: 'text',
        merge: true,
        defaultValue: '<'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);

        me.setReference('previousButton');
    },

    onSetup: function() {
        this.setCfgValue('text', '<');
    }
});
