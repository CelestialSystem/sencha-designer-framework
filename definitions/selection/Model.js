xds.component.Registry.addDefinition({
    override: "Ext.selection.Model",
    typeAlias: 'selectionmodel',
    mixin: ['baseview'],

    validParentTypes: ['tablepanel'],
    validChildTypes: [],
    disableDuplication: true,
    disablePromoteToClass: true,

    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);

        me.setReference('selModel');
    },

    onCanvasConfig: function(config) {
        config.selType = this.getAlias().replace(/^selection\./, '');
        return config;
    },

    onCodeConfig: function(config) {
        var selType = this.getCreateAlias() || this.getAlias().replace(/^selection\./, '');
        config.configs.unshift({
            name: 'selType',
            type: 'string',
            primitive: true,
            rawValue: selType,
            value: selType
        });
        return config;
    }
});
