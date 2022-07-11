xds.component.Registry.addDefinition({
    override: "Ext.chart.legend.Legend",
    typeAlias: 'legend',
    mixin: ['baseview'],

    toolbox: {
        name: 'Legend',
        iconCls: 'icon-legend',
        category: 'Charts',
        groups: ['Charts']
    },
    validParentTypes: ['cartesian','polar'],
    validChildTypes: [],
    ignoreCfgs: ['store'],

    cfgs: [{
        "name": "docked",
        "type": "string",
        "editor": "options",
        "options": [
            "bottom",
            "left",
            "right",
            "top"
        ],
        "bindable": true,
        defaultValue: 'bottom'
    }],

    init: function() {
        let me = this;
        me.setReference('legend');
        me.ex('setup', Ext4.emptyFn); //prevent creation of child itemTpl
    }
});
