xds.component.Registry.addDefinition({
    override: "Ext.form.field.Spinner",
    typeAlias: 'spinnerfield',

    toolbox: {
        name: 'Spinner Field',
        iconCls: 'icon-spinnerfield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    autoName: "MySpinnerField",

    cfgs: [{
        name: 'onSpinUp',
        type: 'function'
    },{
        name: 'onSpinDown',
        type: 'function'
    }],

    ignoreCfgs: [
        'triggerCls'
    ]
});