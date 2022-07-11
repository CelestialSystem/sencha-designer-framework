Ext.define('xds.StoreHelper', {
    extend: 'xds.AbstractStoreHelper',
    singleton: true,

    /**
     * @override
     * Inherit docs.
     */
    addStoreLoadListener: function(store, handler) {
        if (store.tree) {
            store.on('load', function(liveStore, records, success) {
                handler(success, records ? records.length : 0);
            });
        } else {
            store.on('refresh', function(liveStore) {
                if (liveStore) {
                    handler(true, liveStore.getCount());
                } else {
                    handler(false, 0);
                }
            });
        }
    }

});