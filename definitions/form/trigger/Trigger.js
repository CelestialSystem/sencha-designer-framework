xds.component.Registry.addDefinition({
    override: "Ext.form.trigger.Trigger",
    typeAlias: 'trigger',
    mixin: ['base', 'baseview'],

    toolbox: {
        name: 'Trigger',
        iconCls: 'icon-trigger',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['basicfunction'],
    validParentTypes: ['textfield'],

    ignoreCfgs: [
        'functionsRefGroup',
        'scope'
    ],

    disablePromoteToClass: true,
    disableDuplication: true,

    cfgs: [{
        name: 'name',
        type: 'string',
        required: true
    },{
        name: 'handler',
        merge: false,
        type: 'function',
        params: [{
            name: 'field',
            type: 'Ext.form.field.Text'
        }, {
            name: 'trigger',
            type: 'Ext.form.trigger.Trigger'
        }, {
            name: 'e',
            type: 'Ext.event.Event'
        }],
        allowOnViewController: true
    }],

    init: function() {
        var me = this;

        me.setReference({ name: 'triggers', type: 'array' });
        me.on({
            create: me.onCreate
        });
    },

    onCreate: function() {
        this.setCfgValue('name', this.getDefaultUserAlias());
    }
});