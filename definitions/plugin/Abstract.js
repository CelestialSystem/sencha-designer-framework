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
        me.on('codeconfig', me.onCodeConfig, me);
        me.setReference({ name: 'plugins', type: 'array' });
    },

    onCanvasConfig: function(config) {
        return this.getPluginType();
    },

    onCodeConfig: function(config) {
        config.configs.push({ name: 'type', rawValue: this.getPluginType() });
        return config;
    }
});
