xds.component.Registry.addDefinition({
    override: "Ext.data.ProxyStore",
    typeAlias: 'proxystore',

    validChildTypes: ['datafield', 'proxy', 'basicfunction', 'grouper', 'sorter', 'filter'],
    singleChildTypes: ['proxy'],

    cfgs: [{
        type: 'string',
        visibleOnlyAsTop: true,
        name: 'designer|extend',
        displayName: 'extend',
        defaultValue: 'Ext.data.ProxyStore',
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validFileName').regex,
        regexText: xds.Resource.get('validFileName').regexText
    }, {
        name: 'batchUpdateMode',
        merge: true,
        editor: 'options',
        options: [
            'complete',
            'operation'
        ]
    }, {
        name: 'fields',
        merge: false,
        displayName: 'Fields',
        type: 'refgroup',
        refSelector: 'datafield',
        createTypes: ['datafield']
    }, {
        //TODO:  add additional logic for preventing the ability to add if fields are already defined
        // Or if we don't want to flat-out prevent it, we could display a warning message about it
        name: 'model',
        merge: false,
        type: 'model'
    }, {
        name: 'proxy',
        merge: false,
        displayName: 'Proxy',
        type: 'refgroup',
        refSelector: 'proxy',
        createTypes: ['ajaxproxy', 'directproxy', 'jsonpproxy', 'localstorageproxy', 'memoryproxy', 'restproxy', 'sessionstorageproxy', 'googlecalendarsproxy', 'googleeventsproxy'],
        max: 1
    }]

});