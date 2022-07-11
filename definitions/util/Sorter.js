xds.component.Registry.addDefinition({
    override: "Ext.util.Sorter",
    typeAlias: 'sorter',
    mixin: ['baseutil'],

    validParentTypes: ['abstractstore'],

    "toolbox": {
        "name": "Sorter",
        "iconCls": "icon-sorter",
        "category": "Data Utilities",
        "groups": ["Data"]
    },

    cfgs: [
        {
            name: 'direction',
            merge: true,
            editor: 'options',
            options: ['ASC', 'DESC']
        },
        {
            name: 'sorterFn',
            merge: true,
            params: ['first', 'second'],
            injectInCanvas: true
        },
        {
            name: 'transform',
            merge: true,
            params: ['item'],
            injectInCanvas: true
        },
        {
            name: 'id',
            merge: true,
            alternates: [{
                type: 'string'
            }]
        }
    ],


    init: function() {
        var me = this;
        me.on('addchild', me.validate, me);
        me.on('removechild', me.validate, me);
        me.ex('validate', me.onValidate, me);
        me.ex('canvasconfig', me.onCanvasConfig, me);
        me.setReference('sorters');
    },

    onValidate: function() {
        var me = this,
            containsSorterFn = Ext4.Array.some(me.children(), function(child) {
                if (child.isType('abstractfunction') && child.getCfgValue('fn') === 'sorterFn') {
                    return true;
                }
            });

        if (!me.getCfgValueOrDefault('property') && !containsSorterFn) {
            return xds.Resource.get('validation').sorterPropertyOrFn;
        }
    },

    onCanvasConfig: function(config) {
        // Prevent errors when instantiating the store canvas instance by adding a default sorterFn
        if (!config.property && !config.sorterFn) {
            config.sorterFn = function() {
                return 0;
            };
        }
        return config;
    }
});
