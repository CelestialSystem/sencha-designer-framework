xds.component.Registry.addDefinition({
    override: 'Ext.d3.interaction.PanZoom',
    mixin: ['baseview'],

    toolbox: {
        name: 'Pan Zoom',
        iconCls: 'icon-interaction-panzoom',
        category: 'D3 Interactions',
        groups: ['Premium']
    },

    validParentTypes: ['d3-svg'],

    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);

        // Interactions are added in the chart's `interactions` config
        me.setReference({ name: 'interactions', type: 'object' });
    },

    onCanvasConfig: function(config) {
        config.type = 'panzoom';
        return config;
    },

    onCodeConfig: function(config) {
        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: 'panzoom',
            rawValue: 'panzoom'
        });
        return config;
    }
});