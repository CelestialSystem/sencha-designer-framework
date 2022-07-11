xds.component.Registry.addDefinition({
    override: "Ext.form.field.Number",
    typeAlias: 'numberfield',

    toolbox: {
        name: 'Number Field',
        iconCls: 'icon-numfield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    // since we inherit from SpinnerField, we don't want to expose onSpinUp/onSpinDown
    ignoreCfgs: [
    	'onSpinUp',
    	'onSpinDown'
    ],

    autoName: 'MyNumberField'
});