xds.component.Registry.addDefinition({
    override: "Ext.plugin.Abstract",
    typeAlias: 'abstractplugin',
    mixin: ['baseview'],

    validChildTypes: [],
    disableDuplication: true,
    disablePromoteToClass: true,

    init: function() {
        var me = this;
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.setReference({ name: 'plugins', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.ptype = this.getPluginType();
        return config;
    }
});
