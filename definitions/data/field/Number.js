xds.component.Registry.addDefinition({
    override: "Ext.data.field.Number",
    typeAlias: ['data.field.float', 'data.field.number'],

    fieldType: 'float', // value for the 'type' config

    toolbox: {
        name: 'Number Field - Data',
        iconCls: 'icon-numfield',
        category: 'Data Models',
        groups: ['Data','Models']
    }
});