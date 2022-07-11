xds.component.Registry.addDefinition({
    type: 'cidrv6validation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.CIDRv6',

    toolbox: {
        name: 'CIDRv6 Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyCIDRv6Validation',

    validationType: 'cidrv6',

    cfgs: [
        {
            name: "matcher",
            type: "regex"
        },
        {
            name: "message",
            type: "string",
            defaultValue: "Is not a valid CIDR block"
        }
    ]
});
