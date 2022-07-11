xds.component.Registry.addDefinition({
    override: "Ext.d3.hierarchy.Hierarchy",

    cfgs: [{
        name: 'store',
        merge: true,
        noneStore: '(hierarchy-none)',
        storeSelector: 'treestore',
        codeValueConfigName: 'designer|userClassName'
    },
    {
        name: "colorAxis",
        merge: false,
        type: 'refgroup',
        refSelector: 'd3ColorAxis',
        createTypes: ['d3ColorAxis'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }],


    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            width: '320',
            height: '320'
        });
    }
});