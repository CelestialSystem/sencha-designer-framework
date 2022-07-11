xds.component.Registry.addDefinition({
    override: "Ext.grid.Tree",
    typeAlias: 'tree',

    toolbox: {
        name: 'Tree',
        iconCls: 'icon-treepanel',
        category: 'Grid',
        groups: ['Grids', 'Views', 'Trees']
    },

    cfgs: [{
        name: 'columns',
        displayName: 'Columns',
        type: 'refgroup',
        refSelector: 'gridcolumn',
        createTypes: ['actioncolumn', 'booleancolumn', 'datecolumn', 'gridcolumn', 'numbercolumn', 'templatecolumn', 'treecolumn']
    }, {
        name: 'store',
        type: 'store',
        bindable: true,
        noneStore: '(tree-none)',
        storeSelector: 'treestore',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'plugins',
        displayName: 'Tree Plugins',
        type: 'refgroup',
        refSelector: '{isPlugin()}',
        createTypes: ['gridviewoptions', 'gridcolumnresizing', 'grideditable', 'rowoperations', 'gridpagingtoolbar', 'gridsummaryrow', 'gridexporterplugin', 'gridrowexpander', 'gridcellediting', 'gridclipboardplugin', 'rowedit', 'treedragdrop'],
        alternates: [{
            displayName: 'plugins',
            name: 'plugins',
            type: 'array'
        }]
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.createChild([{
            type: 'treecolumn',
            data: {
                text: 'Text',
                dataIndex: 'text',
                width: 159
            }
        }]);

        this.setCfgValue({
            height: '100%',
            width: '100%'
        });
    }
});
