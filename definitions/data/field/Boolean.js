xds.component.Registry.addDefinition({
    override: "Ext.data.field.Boolean",
    typeAlias: ['data.field.bool', 'data.field.boolean'],

    // value for the 'type' config
    // NOTE: unlike all other fields, this doesn't match the value ('bool') returned by
    // the getType method in the framework; this shouldn't be an issue.
    fieldType: 'boolean',

    toolbox: {
        name: 'Boolean Field',
        iconCls: 'icon-checkbox',
        category: 'Data Models',
        groups: ['Data','Models']
    }
});