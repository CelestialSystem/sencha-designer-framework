xds.component.Registry.addDefinition({
    type: 'currencyusvalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.CurrencyUS',

    toolbox: {
        name: 'CurrencyUS Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyCurrencyUSValidation',

    validationType: 'currency-us',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid currency amount"
        }
    ]
});
