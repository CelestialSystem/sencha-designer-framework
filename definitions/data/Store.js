xds.component.Registry.addDefinition({
    override: "Ext.data.Store",
    typeAlias: 'store',

    toolbox: {
        name: 'Store',
        iconCls: 'icon-store',
        category: 'Data Stores',
        groups: ['Data']
    },
    transformGroup: 'flatstores',

    cfgs: [{
        type: 'string',
        visibleOnlyAsTop: true,
        name: 'designer|extend',
        displayName: 'extend',
        defaultValue: 'Ext.data.Store',
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validFileName').regex,
        regexText: xds.Resource.get('validFileName').regexText
    }, {
        name: 'data',
        merge: true,
        mock: false,
        defaultValue: null          // wrong ExtJS documentation. This line can be removed after EXTJS-23303 is fixed
    }]
});
