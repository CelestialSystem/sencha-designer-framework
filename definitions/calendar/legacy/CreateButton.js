xds.component.Registry.addDefinition({
    type: "Ext.calendar.legacy.CreateButton",
    inherits: 'Ext.button.Button',
    typeAlias: 'calendarcreatebutton',

    autoName: 'MyCreateButton',

    cfgs: [{
        name: 'text',
        merge: true,
        defaultValue: 'Create'
    }, {
        name: 'cls',
        merge: true,
        defaultValue: 'x-calendar-panel-create-button'
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);

        me.setReference('createButton');
    },

    onSetup: function() {
        this.setCfgValue('text', 'Create');
    }
});
