xds.component.Registry.addDefinition({
    type: 'numbervalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.Number',

    toolbox: {
        name: 'Number Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyNumberValidation',

    validationType: 'number',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid number"
        }
    ]
});
