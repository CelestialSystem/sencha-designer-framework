xds.component.Registry.addDefinition({
    type: 'ipaddressvalidation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.IPAddress',

    toolbox: {
        name: 'IP Address Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyIPAddressValidation',

    validationType: 'ipaddress',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid IP address"
        }
    ]
});
