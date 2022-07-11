xds.component.Registry.addDefinition({
    type: 'cidrv4validation',
    inherits: 'datavalidation',
    docClassName: 'Ext.data.validator.CIDRv4',

    toolbox: {
        name: 'CIDRv4 Validation',
        iconCls: 'icon-validation-format',
        category: 'Data Model Validations',
        groups: ['Data','Models']
    },
    autoName: 'MyCIDRv4Validation',

    validationType: 'cidrv4',

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
