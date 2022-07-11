(function() {

    // Global queue of instances in placeholder mode; this queue gets flushed
    // when the API finishes loading.
    var placeholderInstances = [],
        callbackName = 'xdsGMapsAPILoadCallback';

    function onMapsApiLoaded() {
        placeholderInstances.forEach(function(map) {
            map.isPlaceholder = false;
            map.initMap();
        });
        placeholderInstances = null;

        delete window[callbackName];
    }



    /**
     * Custom dtype for Ext.Map.
     *
     * We can't guarantee that the Google Maps API will have already been loaded, or that it
     * can even be loaded at all (e.g. no network connection.) So we override Ext.Map to
     * skip all maps-related logic until after the API has loaded.
     */
    Ext.define('xds.dtypes.Map', {
        extend: 'Ext.ux.google.Map',
        alias: 'widget.xdmap',

        isPlaceholder: false,

        constructor: function() {
            var me = this,
                goog = window.google,
                Loader = Ext.Loader,
                emptyFn = Ext.emptyFn,
                disableCaching;

            if (goog && goog.maps && goog.maps.Map) {
                // API is available! Construct the map like normal.
                me.callParent(arguments);
            } else {
                // No API yet; temporarily pretend it's loaded to avoid the superclass constructor
                // exiting early, but set the isPlaceholder flag so other methods don't try to
                // actually do things with the API during construction. That flag will be removed
                // once the API is loaded and we'll pick up where we left off.
                window.google = {maps:{}};
                me.isPlaceholder = true;
                me.callParent(arguments);
                window.google = goog;

                placeholderInstances.push(me);
                me.on('destroy', function() {
                    if (placeholderInstances) {
                        Ext.Array.remove(placeholderInstances, me);
                    }
                });

                // Invoke async load of maps API
                if (!window[callbackName]) {
                    window[callbackName] = onMapsApiLoaded;

                    // Temporarily disable cache buster
                    disableCaching = Loader.getConfig('disableCaching');
                    Loader.setConfig('disableCaching', false);

                    // Load the script
                    Loader.loadScript('http://maps.googleapis.com/maps/api/js?sensor=false&callback=' + callbackName, emptyFn, emptyFn);
                    Loader.setConfig('disableCaching', disableCaching);
                }
            }
        },

        initMap: function() {
            // don't allow initMap to be called unless the 
            // google maps object is properly populated
            if (window.google.maps && window.google.maps.LatLng) {
                this.callParent(arguments);
            }
        },

        renderMap: function() {
            if (!this.isPlaceholder) {
                this.callParent(arguments);
            }
        },

        update: function() {
            if (!this.isPlaceholder) {
                this.callParent(arguments);
            }
        },

        setMapCenter: function() {
            // if this.element doesn't exist, this component has just been destroyed and
            // calling setMapCenter will cause a framework error. This override avoids
            // that situation.
            if (this.element && !this.isPlaceholder) {
                this.callParent(arguments);
            }
        },

        onGeoUpdate: function() {
            if (!this.isPlaceholder) {
                this.callParent(arguments);
            }
        }
    });

})();