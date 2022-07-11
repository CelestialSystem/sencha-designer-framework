/**
 * Definition for the application's global Ext.Loader configuration
 */
xds.component.Registry.addDefinition({
    override: "Ext.Loader",
    typeAlias: 'loader',
    mixin: ['baseutil'],

    iconCls: 'icon-loader',
    autoName: 'Loader',

    validChildTypes: [],
    validParentTypes: ['application'],

    obscureCfgs: ['disableCachingParam'],

    init: function() {
        var me = this;

        me.on('setup', me.onSetup, me);

        // This reference is really just a flag to identify it as the loader, so that
        // it can get picked out of the Application's references list during codeconfig.
        me.setReference('loader');
    },

    onSetup: function() {
        // Default to enabling the loader when created
        if (!this.isCfgSet('enabled')) {
            this.setCfgValue('enabled', true);
        }
    }
});
