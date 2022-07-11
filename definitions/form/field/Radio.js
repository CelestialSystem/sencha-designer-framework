xds.component.Registry.addDefinition({
    override: "Ext.form.field.Radio",
    typeAlias: 'radiofield',

    toolbox: {
        name: 'Radio',
        iconCls: 'icon-radio',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    ignoreCfgs: [
        'inputType'
    ]
});