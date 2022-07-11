Ext.define('xds.dtypes.Img', {
    extend: 'Ext.Img',
    alias: 'widget.xdimage',

    config: {
        xdsState: 'loading',
        xdsShrink: false
    },

    initialize: function() {
        this.callParent(arguments);
        // If the src is set,
        if (this.getInitialConfig('xdsState') !== 'unset') {
            this.on({
                load: 'xdsOnLoad',
                error: 'xdsOnError'
            });
        }
    },

    xdsOnLoad: function() {
        this.setXdsState('loaded');
    },

    xdsOnError: function() {
        this.setXdsState('error');
    },

    updateXdsState: function(newState, oldState) {
        var prefix = 'xds-img-';
        if (oldState) {
            this.removeCls(prefix + oldState);
        }
        if (newState) {
            this.addCls(prefix + newState)
        }
    },

    updateXdsShrink: function(shrink) {
        this[shrink ? 'addCls' : 'removeCls']('xds-img-shrink');
    }

});