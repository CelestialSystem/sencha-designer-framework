xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.Feature",
    typeAlias: 'gridfeature',
    mixin: ['baseview'],

    validParentTypes: ['grid', 'tree'],
    validChildTypes: [],

    disablePromoteToClass: true,

    init: function() {
        var me = this;

        me.on({
            canvasconfig: me.onCanvasConfig,
            codeconfig: me.onCodeConfig,
            scope: me
        });
        me.setReference({ name: 'features', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.ftype = this.getFeatureType();
        return config;
    },

    onCodeConfig: function(config) {
        var ftype = this.getCodeGenFeatureType();

        config.configs.unshift({
            name: 'ftype',
            type: 'string',
            value: ftype,
            rawValue: ftype
        });

        return config;
    },

    getCodeGenFeatureType: function() {
        return this.getCreateAlias() || this.getFeatureType();
    },

    getFeatureType: function() {
        return this.getAlias().replace(/^feature\./, '');
    }
});
