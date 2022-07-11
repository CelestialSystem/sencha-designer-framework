xds.component.Registry.addDefinition({
    override: "Ext.ux.GMapPanel",
    typeAlias: 'gmappanel',

    toolbox: {
        name: 'Google Map',
        iconCls: 'icon-map',
        category: 'Standard',
        groups: ['Views']
    },

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;
        me.addCfg({ name: 'center', type: 'object' });
        me.setCfgValue('center', { lat: 37.511517, lng: -122.200778 });
    }
});
