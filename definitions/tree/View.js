xds.component.Registry.addDefinition({
    override: "Ext.tree.View",
    typeAlias: 'treeview',

    classAlias: null, // prevent xtype in code
    toolbox: {
        name: 'Tree View',
        iconCls: 'icon-treeview',
        category: 'Tree / Tree Grid',
        groups: ['Views', 'Trees']
    },
    autoName: 'MyTreeView',
    validParentTypes: ['treepanel'],
    validChildTypes: ['treedragdropplugin'],
    singleChildTypes: ['treedragdropplugin'],

    ignoreCfgs: ['store'],
    cfgs: [{
        name: 'plugins',
        displayName: 'Drag Drop Plugin',
        type: 'refgroup',
        refSelector: 'treedragdropplugin',
        createTypes: ['treedragdropplugin']
    }],

    init: function() {
        var me = this;

        me.on({
            codeconfig: me.onCodeConfig,
            scope: me
        });
        me.setReference('viewConfig');
    },

    onCodeConfig: function(config) {
        return this.moveChildListenersToMe(config, 'Ext.tree.plugin.TreeViewDragDrop');
    },

    getDefaultItemTpl: function() {
        return 'Tree View Item {string}';
    }
});