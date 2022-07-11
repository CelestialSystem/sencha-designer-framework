xds.component.Registry.addDefinition({
    override: "Ext.form.field.Display",
    typeAlias: 'displayfield',

    toolbox: {
        name: 'Display Field',
        iconCls: 'icon-display-field',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyDisplayField',

    obscureCfgs: ['fieldCls'],
    ignoreCfgs: [
        'scope',
        'validateOnBlur'
    ],

    cfgs: [{
        name: 'renderer',
        merge: true,
        params: [{
            name: 'value',
            type: 'Object'
        }, {
            name: 'displayField',
            type: 'Ext.form.field.Display'
        }]
    },{
        name: 'value',
        type: 'string',
        alternates: [{
            type: 'object'
        }]
    }],

    inlineEdit: [{
        cfg: 'fieldLabel',
        textEl: '.x-form-item-label'
    }, {
        cfg: 'value',
        textEl: '.x-form-display-field'
    }],

    init: function() {
        var me = this;

        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue('value', 'Display Field');
    }
});