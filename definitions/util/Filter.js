xds.component.Registry.addDefinition({
    override: "Ext.util.Filter",
    typeAlias: 'filter',
    mixin: ['baseutil'],

    validParentTypes: ['abstractstore'],

    "toolbox": {
        "name": "Filter",
        "iconCls": "icon-filter",
        "category": "Data Utilities",
        "groups": ["Data"]
    },

    ignoreCfgs: [
        'scope'
    ],

    cfgs: [
        {
            name: 'filterFn',
            merge: true,
            params: ['item'],
            injectInCanvas: true
        }, {
            name: 'serializer',
            merge: true,
            params: ['state'],
            injectInCanvas: true
        }, {
            name: 'value',
            merge:true,
            alternates: [{
                type: 'object'
            }, {
                type: 'array'
            }]
        }
    ],


    init: function() {
        var me = this;
        me.on('addchild', me.validate, me);
        me.on('removechild', me.validate, me);
        me.ex('validate', me.onValidate, me);
        me.ex('canvasconfig', me.onCanvasConfig, me);
        me.setReference('filters');
    },

    onValidate: function() {
        var me = this,
            prop = me.getCfgValueOrDefault('property'),
            val = me.getCfgValueOrDefault('value'),
            containsFilterFn = Ext4.Array.some(me.children(), function(child) {
                if (child.isType('abstractfunction') && child.getCfgValue('fn') === 'filterFn') {
                    return true;
                }
            });

        if ((prop && !val) || (val && !prop) || (!prop && !val && !containsFilterFn)) {
            return xds.Resource.get('validation').filterPropertyAndValueOrFn;
        }
    },

    onCanvasConfig: function(config) {
        // Prevent errors when instantiating the store canvas instance
        var prop = config.property,
            val = config.value;
        if ((prop && !val) || (val && !prop) || (!prop && !val && !config.filterFn)) {
            delete config.property;
            delete config.value;
            config.filterFn = function() {
                return true;
            };
        }
        return config;
    }
});
