xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Action",
    typeAlias: 'actioncolumn',

    toolbox: {
        name: 'Action Column',
        iconCls: 'icon-grid-action',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyActionColumn',

    validChildTypes: ['actioncolumnitem'],

    ignoreCfgs: [
        // isDisabled is placed on the Action Column by JSDuck doc parsing,
        // but belongs on an action item.
        'isDisabled',
        'scope',
        'editor'
    ],

    cfgs: [{
        name: 'items',
        merge: false,
        displayName: 'Action Items',
        type: 'refgroup',
        refSelector: 'actioncolumnitem',
        createTypes: ['actioncolumnitem']
    }, {
        name: 'getClass',
        merge: true,
        injectInCanvas: true
    }, {
        name: 'handler',
        merge: true,
        allowOnViewController: true
    }],

    inlineEdit: null,

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;
        // Create a single default action item for the column. This isn't required by the API
        // (all of the item's configs can be specified directly on the column itself when there
        // is only one item) but it's more explicit and discoverable for the user if we set up
        // an item for them by default.
        if (!me.child('actioncolumnitem')) {
            me.createChild('actioncolumnitem');
        }
    }
});
