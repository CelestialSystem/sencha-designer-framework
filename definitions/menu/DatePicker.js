xds.component.Registry.addDefinition({
    override: "Ext.menu.DatePicker",
    typeAlias: 'datemenu',

    toolbox: {
        name: 'Date Menu',
        iconCls: 'icon-date-menu',
        category: 'Menu',
        groups: ['Views', 'Menus']
    },
    autoName: 'MyDateMenu',
    validChildTypes: [],

    ignoreCfgs: ['tools'],

    cfgs: [{
        name: 'handler',
        type: 'function',
        params: [{
            name: 'datepicker',
            type: 'Ext.picker.Date'
        }, {
            name: 'date',
            type: 'Date'
        }]
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        if (!parent) {
            me.setCfgValue('width', 200);
        }
    }
});
