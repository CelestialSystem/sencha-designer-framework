xds.component.Registry.addDefinition({
    override: "Ext.data.TreeStore",
    typeAlias: 'treestore',

    toolbox: {
        name: 'Tree Store',
        category: 'Data Stores',
        groups: ['Data', 'Trees'],
        iconCls: 'icon-tree-store'
    },

    defaultProxyType: 'ajaxproxy',
    defaultReaderType: 'jsonreader',

    validChildTypes: ['datafield', 'proxy', '!webstorageproxy', '!syncstorageproxy', 'basicfunction', 'sorter', 'filter', 'grouper'],

    cfgs: [{
        type: 'string',
        visibleOnlyAsTop: true,
        name: 'designer|extend',
        displayName: 'extend',
        defaultValue: 'Ext.data.TreeStore',
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validFileName').regex,
        regexText: xds.Resource.get('validFileName').regexText
    }, {
        name: 'fields',
        merge: true,
        displayName: 'Fields',
        type: 'refgroup',
        refSelector: 'datafield',
        createTypes: ['datafield'],
        alternates: [{
            type: 'object'
        }]
    }],

    displayLoadSuccess: function () {
        // We don't want to display a record count for a nested data structure
        var me = this,
            msg = me.loadedMessage;

        msg.text = xds.app.Resource.get('storeLoad').successTree;
        msg.iconCls = me.icons.loaded;

        me.displayMessage(msg);
    }
});