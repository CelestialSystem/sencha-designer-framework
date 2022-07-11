xds.component.Registry.addDefinition({
    type: 'phonevalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.Phone',

    toolbox: {
        name: 'Phone Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyPhoneValidation',

    validationType: 'phone',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid phone number"
        }
    ]
});
