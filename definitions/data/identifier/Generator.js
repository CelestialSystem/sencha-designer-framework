xds.component.Registry.addDefinition({
    override: "Ext.data.identifier.Generator",
    typeAlias: 'idgenerator',
    mixin: ['basemodel'],

    transformGroup: 'idgenerators',
    validParentTypes: ['datamodel'],

    init: function() {
        var me = this;

        me.setReference('identifier');

        me.on({
            canvasconfig: me.onCanvasConfig,
            codeconfig: me.onCodeConfig,
            scope: me
        });
    },

    getIdGeneratorType: function() {
        return this.getAlias().replace(/^identifier\./, '');
    },

    onCanvasConfig: function(config) {
        // Add the id generator type
        config.type = this.getIdGeneratorType();
        return config;
    },

    onCodeConfig: function(config) {
        config.configs.unshift({
            name: 'type',
            type: 'string',
            rawValue: this.getIdGeneratorType()
        });
        return config;
    }

});