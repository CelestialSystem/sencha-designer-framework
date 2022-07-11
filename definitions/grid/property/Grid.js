xds.component.Registry.addDefinition({
    override: "Ext.grid.property.Grid",
    typeAlias: 'propertygrid',

    toolbox: {
        name: 'Property Grid',
        iconCls: 'icon-propertygrid',
        category: 'Grid',
        groups: ['Grids']
    },
    autoName: 'MyPropertyGrid',

    obscureCfgs: ['columnLines'],
    ignoreCfgs: ['features', 'store'],

    cfgs: [{
        name: 'nameField',
        merge: true,
        type: 'datafield'
    }, {
        name: 'plugins',
        displayName: 'Grid Plugins',
        type: 'refgroup',
        refSelector: 'abstractplugin',
        createTypes: ['Ext.grid.plugin.BufferedRenderer'] // row/cellediting plugins aren't allowed
    }],


    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on('validchild', me.onValidChild, me);
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        me.setCfgValue('title', 'My Property Grid');
        if (!parent) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }
        if (!me.isCfgSet('source')) {
            me.setCfgValue('source',
            {
                'Property 1': 'String',
                'Property 2': true,
                'Property 3': new Date(),
                'Property 4': 123
            });
        }
    },

    onValidChild: function(child) {
        // Property grids set up their own internal columns and cell editors, so prevent the
        // user from adding their own. Also, grid features don't apply since the user can't
        // control the underlying store or column configs to support the features.
        return !child.isType(['Ext.grid.column.Column', 'Ext.grid.plugin.Editing', 'Ext.grid.feature.Feature']);
    }
});
