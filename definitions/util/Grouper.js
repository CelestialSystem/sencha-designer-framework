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
    ],

    init: function() {
        var me = this;
        me.ex('validate', me.onValidate, me);
        me.ex('canvasconfig', me.onCanvasConfig, me);
        me.setReference('grouper');
    },

    onValidate: function() {
        var me = this,
            containsGroupFn = Ext4.Array.some(me.children(), function(child) {
                if (child.isType('abstractfunction') && child.getCfgValue('fn') === 'groupFn') {
                    return true;
                }
            });

        if (!me.getCfgValueOrDefault('property') && !containsGroupFn) {
            return xds.Resource.get('validation').grouperPropertyOrFn.ext5;
        }
    },

    onCanvasConfig: function(config) {
        // Prevent errors when instantiating the store canvas instance
        if (!config.groupFn) {
            config.groupFn = function() {
                return '';
            };
        }
        return config;
    }

});
