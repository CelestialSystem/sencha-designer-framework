xds.component.Registry.addDefinition({
    override: "Ext.dataview.DataItem",
    typeAlias: 'dataitem',

    validAsTopInstance: true,
    validParentTypes: ['viewcategory'],
    fullscreenAtTopLevel: false,

    toolbox: {
        name: 'Data View Item',
        iconCls: 'icon-dataview',
        category: 'Views',
        groups: ['Views', 'Containers']
    },

    reservedCfgs: ['record', 'dataMap'],

    ignoreCfgs: [
        'dataMap',
        'defaultType',
        'record',
        'items'
    ],

    cfgs: [{
        name: 'updateRecord',
        type: 'function',
        params: [{
            name: 'record',
            type: 'Ext.data.Model'
        }],
        defaultImplHandler: xds.Resource.get('defaultImplHandlers').updateRecord
    }],

    init: function() {
        var me = this;

        me.on({
            setup: me.onSetup,
            scope: me
        });
    },

    onSetup: function() {
        this.setCfgValue({
            padding: 10,
            layout: 'hbox'
        });

        // automatically populate with updateRecord method
        if (!this.isCfgSet(('updateRecord'))) {
            this.getCfg('updateRecord').createRef();
        }

        if (!this.down('component')) {
            this.createChild({
                type: 'component',
                userConfig: {
                    'layout|flex': 1,
                    html: 'Sample component inside dataitem'
                }
            });
        }
    }
});
