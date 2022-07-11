xds.component.Registry.addDefinition({
    override: "Ext.data.reader.Array",
    typeAlias: 'arrayreader',

    toolbox: {
        name: 'Array Reader',
        iconCls: 'icon-array-reader',
        category: 'Data Readers',
        groups: ['Data','Models']
    },
    autoName: 'MyArrayReader'
});