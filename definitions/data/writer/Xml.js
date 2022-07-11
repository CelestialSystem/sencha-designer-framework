xds.component.Registry.addDefinition({
    override: "Ext.data.writer.Xml",
    typeAlias: 'xmlwriter',

    toolbox: {
        name: 'Xml Writer',
        iconCls: 'icon-xml',
        category: 'Data Writers',
        groups: ['Data','Models']
    },
    autoName: 'MyXmlWriter'
});