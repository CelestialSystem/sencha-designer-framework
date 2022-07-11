xds.component.Registry.addDefinition({
    override: "Ext.data.TreeStore",
    typeAlias: 'treestore',

    toolbox: {
        name: 'Tree Store',
        category: 'Data Stores',
        groups: ['Data', 'Trees'],
        iconCls: 'icon-tree-store'
    },
    transformGroup: null,

    defaultProxyType: 'ajaxproxy',
    defaultReaderType: 'jsonreader',

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
        merge: false,
        displayName: 'Fields',
        type: 'refgroup',
        refSelector: 'datafield',
        createTypes: ['datafield']
    }],

    init: function() {
        this.on('codeconfig', this.onCodeConfig, this);
    },

    onCodeConfig: function(config) {
        // If we're not at the top level, we need the type property to tell it what
        // kind of store to instantiate.
        if (!this.isTop()) {
            config.configs.unshift({
                name: 'type',
                type: 'string',
                primitive: true,
                rawValue: 'tree',
                value: 'tree'
            });
        }
        return config;
    },

    displayLoadSuccess: function() {
        // We don't want to display a record count for a nested data structure
        var me = this,
            msg = me.loadedMessage;

        msg.text = xds.app.Resource.get('storeLoad').successTree;
        msg.iconCls = me.icons.loaded;

        me.displayMessage(msg);
    }
});