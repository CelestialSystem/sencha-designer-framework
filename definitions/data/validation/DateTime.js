xds.component.Registry.addDefinition({
    type: 'datetimevalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.DateTime',

    toolbox: {
        name: 'DateTime Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyDateTimeValidation',

    validationType: 'datetime',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid date and time"
        }
    ]
});
