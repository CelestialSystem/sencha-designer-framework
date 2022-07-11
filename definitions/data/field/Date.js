xds.component.Registry.addDefinition({
    override: "Ext.data.field.Date",
    typeAlias: ['data.field.date'],

    fieldType: 'date', // value for the 'type' config

    toolbox: {
        name: 'Date Field - Data',
        iconCls: 'icon-datefield',
        category: 'Data Models',
        groups: ['Data','Models']
    }
});