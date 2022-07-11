xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.NextButton",
    inherits: 'Ext.button.Button',
    typeAlias: 'calendarnextbutton',

    autoName: 'MyNextButton',

    cfgs: [{
        name: 'text',
        merge: true,
        defaultValue: '>'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);

        me.setReference('nextButton');
    },

    onSetup: function() {
        this.setCfgValue('text', '>');
    }
});
