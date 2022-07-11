xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.DateTitle",
    inherits: 'Ext.Component',
    typeAlias: 'calendardatetitle',

    autoName: 'MyDateTitle',

    cfgs: [{
        name: 'margin',
        merge: true,
        defaultValue: '0 0 0 10'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);

        me.setReference('calTitle');
    },

    onSetup: function() {
        this.setCfgValue('margin', '0 0 0 10');
    }
});
