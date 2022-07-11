xds.component.Registry.addDefinition({
    override: "Ext.data.reader.Xml",
    typeAlias: 'xmlreader',

    toolbox: {
        name: 'Xml Reader',
        iconCls: 'icon-xml-reader',
        category: 'Data Readers',
        groups: ['Data','Models']
    },
    autoName: 'MyXmlReader',

    isConfigComplete: function() {
        // Xml reader requires the record config before loading
        return this.isCfgSet('record');
    }
});