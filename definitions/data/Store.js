xds.component.Registry.addDefinition({
    override: "Ext.data.Store",
    typeAlias: 'store',
    mixin: ['basedata', 'storebehavior'],

    toolbox: {
        name: 'Store',
        iconCls: 'icon-store',
        category: 'Data Stores',
        groups: ['Data']
    },

    validChildTypes: ['datafield', 'proxy', 'basicfunction', 'filter', 'grouper', 'sorter'],
    singleChildTypes: ['proxy'],

    basicCfgs: ['autoLoad', 'storeId', 'model', 'fields', 'proxy', 'sorters', 'filters', 'grouper'],

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
        name: 'autoLoad',
        type: 'boolean',
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'data',
        merge: true,
        mock: false,
        defaultValue: null          // wrong ExtJS documentation. This line can be removed after EXTJS-23303 is fixed
    }, {
        name: 'fields',
        displayName: 'Fields',
        type: 'refgroup',
        refSelector: 'datafield',
        createTypes: ['datafield']
    }, {
        name: 'filters',
        displayName: 'Filters',
        type: 'refgroup',
        refSelector: 'filter',
        createTypes: ['filter']
    }, {
        name: 'groupDir',
        editor: 'options',
        type: 'string',
        options: [ 'ASC', 'DESC' ]
    }, {
        name: 'groupField',
        type: 'datafield'
    }, {
        name: 'grouper',
        displayName: 'Grouper',
        type: 'refgroup',
        refSelector: 'grouper',
        createTypes: ['grouper'],
        max: 1
    }, {
        //TODO:  add additional logic for preventing the ability to add if fields are already defined
        // Or if we don't want to flat-out prevent it, we could display a warning message about it
        name: 'model',
        type: 'model'
    }, {
        name: 'proxy',
        displayName: 'Proxy',
        type: 'refgroup',
        refSelector: 'proxy',
        createTypes: ['ajaxproxy', 'directproxy', 'jsonpproxy', 'localstorageproxy', 'memoryproxy', 'restproxy', 'sessionstorageproxy', 'Ext.data.proxy.Sql'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on('removechild', me.onRemoveChild, me);
    },

    onRemoveChild: function(child) {
        if (child.className === 'Ext.util.Grouper') {
            // ensure no lists have "grouped" set to true. If so, set to false.
            var lists = xds.component.Registry.getInstancesByType('list'),
                len = lists.length,
                me = this,
                i = 0,
                cmp,
                message;

            for (; i<len; i++) {
                cmp = lists[i];
                // if the bound component we're looking at is a list pointing to this store and is grouped, ensure grouped is unset.
                if (cmp.flyCfg('store').getValueInstance() === me && cmp.getCfgValue('grouped')) {
                    cmp.setCfgValue('grouped', false);
                    message = xds.Resource.get('storeGrouping').groupedDisabled;
                    xds.ui.Ack.display(Ext4.String.format(message, cmp.getName()));
                }
            }
        }
    }

});
