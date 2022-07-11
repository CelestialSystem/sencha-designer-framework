/**
 * This is a mixin for Component that provides the behavior surrounding responsive
 * configs. The Responsive plugin itself is not independently configurable, so rather
 * than forcing users to add that plugin as a child, we expose the responsive configs
 * on Component at all times and include the plugin in the codegen/canvasconfig
 * automatically when needed.
 */
xds.component.Registry.addDefinition({
    override: "Ext.mixin.Responsive",
    typeAlias: 'responsivemixin',

    init: function() {
        this.on({
            canvasconfig: this.onCanvasConfig,
            codeconfig: this.onCodeConfig,
            coderequires: this.onCodeRequires
        });
    },

    onCanvasConfig: function(config) {
        if (this.needsResponsivePlugin()) {
            var plugins = config.plugins || (config.plugins = []);
            plugins.push({
                ptype: 'responsive'
            });
        }
        return config;
    },

    onCodeConfig: function(config) {
        if (this.needsResponsivePlugin()) {
            var refs = config.refs || (config.refs = []),
                foundPluginsRef = false,
                pluginRefConfig = {
                    configs: [{
                        name: 'ptype',
                        primitive: true,
                        rawValue: 'responsive',
                        value: 'responsive'
                    }]
                };
            refs.each(function(ref) {
                if (ref.name === 'plugins') {
                    ref.value.push(pluginRefConfig);
                    foundPluginsRef = true;
                    return false; //break loop
                }
            });
            if (!foundPluginsRef) {
                refs.push({
                    name: 'plugins',
                    primitive: true,
                    value: [pluginRefConfig]
                });
            }
        }
        return config;
    },

    onCodeRequires: function() {
        return this.needsResponsivePlugin() ? 'Ext.plugin.Responsive' : null;
    },

    needsResponsivePlugin: function() {
        var needsPlugin = this.isCfgSet('responsiveConfig') || this.isCfgSet('responsiveFormulas');

        // It's possible that the user has added a custom 'plugins' cfg, in which case we
        // can't automatically add the responsive plugin and they will have to do it manually.
        if (needsPlugin && this.hasCustomCfg('plugins') && this.isCfgSet('plugins')) {
            needsPlugin = false;
        }

        return needsPlugin;
    }
});
