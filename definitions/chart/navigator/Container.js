xds.component.Registry.addDefinition({
    override: 'Ext.chart.navigator.Container',
    typeAlias: 'chartnavigator',
    autoName: 'MyNavigatorContainer',

    toolbox: {
        name: 'Chart Navigator Container',
        iconCls: 'icon-container',
        category: 'Containers',
        groups: ['Charts', 'Containers']
    },

    singleChildTypes: ['[type="Ext.chart.CartesianChart"]', 'navigatorbase'],

    // Cannot override chart config to be refgroup type,
    // because dunno how to reference the charts from BuiltIn.js in createTypes field.
    // Therefore let's hide the chart config and allow only drag&drop.
    ignoreCfgs: ['chart'],

    cfgs: [{
        name: 'chart',
        merge: true,
        type: 'refgroup',
        refSelector: 'Ext.chart.CartesianChart',
        createTypes: [], // how to reference charts from BuiltIn.js???
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'navigator',
        merge: true,
        type: 'refgroup',
        refSelector: 'navigatorbase',
        createTypes: ['Ext.chart.navigator.Navigator'],
        max: 1
    }],

    init() {
        var me = this;
        me.on({
            create: me.onCreate,
            validate: me.onValidate,
            codeconfig: me.onCodeConfig,
            addchild: me.onAddChild,
            scope: me
        });
    },

    onCreate() {
        this.setCfgValue('header', false);
    },

    onValidate() {
        if (!this.isCfgSet('chart')) {
            return xds.Resource.get('validation').navigatorContainerMissingChart;
        }
    },

    onCodeConfig(config) {
        if (config.refs) {
            let navigator = config.refs.find(ref => ref.name === 'navigator');
            if (navigator) {
                navigator.value.configs = navigator.value.configs.filter(cfg => cfg.name !== 'xtype');
            }
        }

        return config;
    },

    onAddChild(child) {
        if (!child.isType('navigatorbase') && child.isType('cartesian')) {
            child.setReference('chart');
        }
    }
});
