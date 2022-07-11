xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.ColumnResizing",

	typeAlias: "gridcolumnresizing",
    ptype: 'gridcolumnresizing',

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Column Resizing Plugin',
        iconCls: 'icon-rowedit', // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids"]
    },

    init: function() {
        var me = this;
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.setReference({ name: 'plugins', type: 'array' });
    },

    onCodeConfig: function(config) {
        var pluginType = this.getCodeGenPluginType();
        config.configs.push({
            name: 'type',
            primitive: true,
            type: 'string',
            rawValue: pluginType,
            value: pluginType
        });
        return config;
    },

    onCanvasConfig: function(config) {
        config.type = this.getPluginType();
        return config;
    }

});