xds.component.Registry.addDefinition({
    type: 'timevalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.Time',

    toolbox: {
        name: 'Time Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyTimeValidation',

    validationType: 'time',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid time"
        }
    ]
});
