xds.component.Registry.addDefinition({
    override: "Ext.data.field.String",
    typeAlias: ['data.field.string'],

    fieldType: 'string', // value for the 'type' config

    toolbox: {
        name: 'String Field',
        iconCls: 'icon-textfield',
        category: 'Data Models',
        groups: ['Data','Models']
    }
});