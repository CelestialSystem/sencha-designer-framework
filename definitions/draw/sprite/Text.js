xds.component.Registry.addDefinition({
    override:  "Ext.draw.sprite.Text",
    type: 'text',
    mixin: ['baseview'],

    toolbox: {
        name: 'Text',
        iconCls: 'icon-textfield',
        category: 'Chart Sprites',
        groups: ['Charts']
    },

    validParentTypes: [
        'Ext.chart.AbstractChart'
    ],

    disablePromoteToClass: true,

    init: function() {
        var me = this;

        me.on({
            canvasconfig: me.onCanvasConfig,
            codeconfig: me.onCodeConfig,
            scope: me
        });

        me.setReference({ name: 'sprites', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.type = this.getSpriteType();
        return config;
    },

    onCodeConfig: function(config) {
        var type = this.getCodeGenSpriteType();

        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: type,
            rawValue: type
        });

        return config;
    },

    getCodeGenSpriteType: function() {
        return this.getCreateAlias() || this.getSpriteType();
    },

    getSpriteType: function() {
        return this.getAlias().replace(/^sprite\./, '');
    }
});
