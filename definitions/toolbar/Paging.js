xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Paging",
    typeAlias: 'pagingtoolbar',

    toolbox: {
        name: 'Paging Toolbar',
        iconCls: 'icon-paging-toolbar',
        category: 'Toolbar',
        groups: ['Grids', 'Containers','Views', 'Forms']
    },
    autoName: 'MyPagingToolbar',

    cfgs: [{
        name: 'store',
        merge: false,
        type: 'store',
        codeValueConfigName: 'designer|userClassName'
    }],

    // used by Panel when giving dock config
    defaultDock: 'bottom',

    inlineEdit: [{
        cfg: 'displayMsg',
        textEl: '.x-toolbar-text:last-child',
        align: 'r-r?'
    }],


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        me.setCfgValue('displayInfo', true);

        if (parent) {
            var store = parent.getCfgValue('store');
            if (store) {
                me.setCfgValue('store', store);
            }

            me.setCfgValue('width', 360);
        } else {
            me.setCfgValue('width', 400);
        }
    }
});
