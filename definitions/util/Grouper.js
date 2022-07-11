xds.component.Registry.addDefinition({
    override: "Ext.util.Grouper",
    typeAlias: 'grouper',

    "toolbox": {
        "name": "Grouper",
        "iconCls": "icon-grouper",
        "category": "Data Utilities",
        "groups": ["Data"]
    },

    cfgs: [
        {
            name: 'groupFn',
            merge: true,
            injectInCanvas: true
        }
    ],

    init: function() {
        var me = this;
        me.on('addchild', me.validate, me);
        me.on('removechild', me.validate, me);
        me.on('validparent', me.onValidParent, me);
        me.ex('validate', me.onValidate, me);
        me.ex('canvasconfig', me.onCanvasConfig, me);
        me.setReference({name: 'grouper', type: 'object'});
    },

    onValidParent: function(parent) {
        // Only allow one grouper per store.
        return !parent.child('grouper');
    },

    onValidate: function() {
        var me = this,
            containsGroupFn = Ext4.Array.some(me.children(), function(child) {
                if (child.isType('abstractfunction') && child.getCfgValue('fn') === 'groupFn') {
                    return true;
                }
            });

        if (!me.getCfgValueOrDefault('property') && !containsGroupFn) {
            return xds.Resource.get('validation').grouperPropertyOrFn.touch;
        }
    },

    onCanvasConfig: function(config) {
        // Prevent errors when instantiating the store canvas instance by adding a default groupFn
        if (!config.property && !config.groupFn) {
            config.groupFn = function() {
                return '';
            };
        }
        return config;
    }

});
