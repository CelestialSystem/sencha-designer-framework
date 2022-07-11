xds.component.Registry.addDefinition({
    override: "Ext.grid.header.Container",
    typeAlias: 'headercontainer',

    validChildTypes: ['gridcolumn'],

    ignoreCfgs: [
        'defaultType',
        'dock'
    ],

    init: function() {
        var me = this;

        me.clearListenersByEvent('flyout');
    }
});
