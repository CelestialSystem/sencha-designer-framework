xds.component.Registry.addDefinition({
    override: "Ext.ux.TabReorderer",
    typeAlias: 'tabreordererplugin',
    ptype: 'tabreorderer',

    validChildTypes: [],
    validParentTypes: ['tabpanel'],

    toolbox: {
        name: 'Tab Reorder Plugin',
        iconCls: 'icon-tab-panel',
        category: ['Ux'],
        groups: ['Containers']
    },

    init: function () {
        var me = this;
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.setReference({name: 'plugins', type: 'array'});
    },

    onCanvasConfig: function (config) {
        config.ptype = this.getPluginType();
        return config;
    }
});