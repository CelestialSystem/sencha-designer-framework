xds.component.Registry.addDefinition({
    type: 'urlvalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.Url',

    toolbox: {
        name: 'Url Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyUrlValidation',

    validationType: 'url',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid URL"
        }
    ]
});
