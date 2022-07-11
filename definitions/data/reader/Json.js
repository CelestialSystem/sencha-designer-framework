xds.component.Registry.addDefinition({
    override: "Ext.data.reader.Json",
    typeAlias: 'jsonreader',

    toolbox: {
        name: 'Json Reader',
        iconCls: 'icon-json-reader',
        category: 'Data Readers',
        groups: ['Data','Models']
    },
    autoName: 'MyJsonReader'
});
