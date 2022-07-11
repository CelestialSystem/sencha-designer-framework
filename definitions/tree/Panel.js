xds.component.Registry.addDefinition({
    override: "Ext.tree.Panel",
    typeAlias: 'treepanel',

    toolbox: {
        name: 'Tree Panel',
        iconCls: 'icon-treepanel',
        category: 'Tree / Tree Grid',
        groups: ['Views', 'Trees']
    },
    autoName: 'MyTreePanel',

    // Any component can be a child of a Table/Grid/Tree Panel
    // but it must to be docked in order to show
    // See TablePanel definition onAddChild event handler
    singleChildTypes: [
        'treeview',
        'treecolumn',
        'selectionmodel',
        '[type="Ext.grid.feature.Grouping"]',
        'groupingsummarygridfeature',
        'rowbodygridfeature',
        'summarygridfeature'
    ],
    nativeTypes: [
        'gridcolumn',
        'gridfeature',
        'gridbaseplugin',
        'headercontainer',
        'selectionmodel',
        'treedragdropplugin'
    ],

    obscureCfgs: ['animate', 'singleExpand'],
    ignoreCfgs: [
        'viewType' // handled by view child ref
    ],

    cfgs: [{
        name: 'columns',
        displayName: 'Columns',
        type: 'refgroup',
        refSelector: 'gridcolumn',
        createTypes: ['actioncolumn', 'booleancolumn', 'datecolumn', 'gridcolumn', 'numbercolumn', 'templatecolumn', 'treecolumn']
    }, {
        name: 'displayField',
        merge: true,
        type: 'datafield'
    }, {
        name: 'store',
        merge: false,
        type: 'store',
        noneStore: '(tree-none)',
        storeSelector: 'treestore',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;

        me.on({
            canvasconfig: me.onCanvasConfig,
            setup: me.onSetup,
            scope: me
        });
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        me.setCfgValue('title', 'My Tree Panel');
        me.createChild('treeview');
        if (!parent) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }
    },

    onCanvasConfig: function(config) {
        var features = config.features;

        // Remove summary features on tree panels, as they are broken in 4.2
        if (Ext4.isArray(features)) {
            config.features = features.filter(function(item) {
                return item.ftype !== 'summary';
            });
        }

        return config;
    }

});
