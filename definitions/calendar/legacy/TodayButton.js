xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.TodayButton",
    inherits: 'Ext.button.Button',
    typeAlias: 'calendartodaybutton',

    autoName: 'MyTodayButton',

    cfgs: [{
        name: 'text',
        merge: true,
        defaultValue: 'Today'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);

        me.setReference('todayButton');
    },

    onSetup: function() {
        this.setCfgValue({
            text: 'Today',
            margin: '0 10 0 0'
        });
    }
});
