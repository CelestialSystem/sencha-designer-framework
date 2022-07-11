xds.component.Registry.addDefinition({
    type: 'datevalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.Date',

    toolbox: {
        name: 'Date Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyDateValidation',

    validationType: 'date',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid date"
        }
    ]
});
