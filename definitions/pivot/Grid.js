xds.component.Registry.addDefinition({
    override: 'Ext.pivot.Grid',
    typeAlias: ['pivotgrid'],

    toolbox: {
        name: 'Pivot grid',
        iconCls: 'icon-pivot-grid',
        category: 'Pivot grid',
        groups: ['Premium']
    },

    validChildTypes: ['component', 'pivotmatrix.local', 'pivotmatrix.remote', 'pivotcelleditingplugin', 'pivotconfiguratorplugin', 'pivotdrilldownplugin', 'pivotexporterplugin', 'pivotrangeeditorplugin'],

    cfgs: [{
        name: 'matrix',
        type: 'refgroup',
        merge: false,
        refSelector: '[inherits=Ext.pivot.matrix.Base]',
        createTypes: ['pivotmatrix.local', 'pivotmatrix.remote']
    }, {
        name: 'plugins',
        displayName: 'Pivot Plugins',
        type: 'refgroup',
        refSelector: 'abstractplugin',
        createTypes: ['pivotcelleditingplugin', 'pivotconfiguratorplugin', 'pivotdrilldownplugin', 'pivotexporterplugin', 'pivotrangeeditorplugin'],
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
    }
});
