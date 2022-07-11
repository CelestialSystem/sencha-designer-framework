xds.component.Registry.addDefinition({
    override: "Ext.data.writer.Json",
    typeAlias: 'jsonwriter',

    toolbox: {
        name: 'Json Writer',
        iconCls: 'icon-json',
        category: 'Data Writers',
        groups: ['Data','Models']
    },
    autoName: 'MyJsonWriter'
});