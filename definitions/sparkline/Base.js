xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Base",
    typeAlias: 'sparklinebase',
    mixin: ['baseview'],

    init: function() {
        var me = this;

        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            width: 200,
            height: 50
        });
    }
});