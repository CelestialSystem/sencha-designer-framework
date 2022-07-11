Ext.define('xds.StoreHelper', {
    extend: 'xds.AbstractStoreHelper',
    singleton: true,

    /**
     * @override
     * Inherit docs.
     */
    addStoreLoadListener: function(store, handler) {
        if (store.tree) {
            store.on('load', function(liveStore, node, records, success) {
                handler(success, records ? records.length : 0);
            });
        } else {
            store.on('refresh', function(liveStore, opts) {
                handler(true, liveStore.getCount());
            });
        }
    },

    shouldComponentBeRebound: function(cmp) {
        // Don't explicitly rebind store on grid views, since that will temporarily
        // put it out of sync with its owner grid and trigger hard-to-reproduce errors.
        return !cmp.is('tableview');
    }

});