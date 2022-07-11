xds.component.Registry.addDefinition({
    override: "Ext.ux.TabCloseMenu",
    typeAlias: 'tabclosemenuplugin',
    ptype: 'tabclosemenu',

    validChildTypes: [],
    validParentTypes: ['tabpanel'],

    toolbox: {
        name: 'Tab Close Menu Plugin',
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