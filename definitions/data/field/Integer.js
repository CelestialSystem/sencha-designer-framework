xds.component.Registry.addDefinition({
    override: "Ext.data.field.Integer",
    typeAlias: ['data.field.int', 'data.field.integer'],

    fieldType: 'int', // value for the 'type' config

    toolbox: {
        name: 'Integer Field',
        iconCls: 'icon-numfield',
        category: 'Data Models',
        groups: ['Data','Models']
    }
});