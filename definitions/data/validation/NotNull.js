xds.component.Registry.addDefinition({
    type: 'notnullvalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.NotNull',

    toolbox: {
        name: 'Not Null Validation',
        iconCls: 'icon-validation-presence',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyNotNullValidation',

    validationType: 'notnull',

    cfgs: [
        {
            name: "allowEmpty",
            type: "boolean"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Must be present"
        }
    ]
});
