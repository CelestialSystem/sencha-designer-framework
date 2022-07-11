/**
 * This dtype for the SyncStorage proxy prevents it from erroring before being
 * fully configured.
 */
Ext.define('xds.dtypes.data.proxy.SyncStorage', {
    extend: 'Ext.data.proxy.SyncStorage',
    alias: 'proxy.xdssyncstorage',

    constructor: function(config) {
        if (config.id && config.key) {
            this.callParent(arguments);
        }
    }
});