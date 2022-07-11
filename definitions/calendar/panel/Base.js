xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Base",
    typeAlias: 'calendarbase',

    initialTitle: null,

    ignoreCfgs: ['dock'],

    cfgs: [{
        name: 'label',
        type: 'string',
        bindable: true
    }, {
        name: 'titleTpl',
        type: 'string'
    }, {
        name: 'controlStoreRange',
        type: 'boolean'
    }],

    init: function() {
        var me = this;
        me.on('create', me.onCreate, me);
        me.setReference('views');
    },

    onCreate: function() {
        this.setCfgValue('label', this.type.split('.').pop());
    }
});
