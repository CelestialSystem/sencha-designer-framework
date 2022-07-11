Ext.define('xds.dtypes.Audio', {
    extend: 'Ext.Audio',
    alias: 'widget.xdaudio',

    /**
     * Override the media element with a plain div, to prevent errors in Ion in Windows
     * and to allow custom styling of the placeholder.
     */
    getTemplate: function() {
        return [{
            reference: 'media',
            tag: 'div',
            cls: 'controls',
            children: [{
                cls: 'play'
            }, {
                cls: 'time',
                html: '0:00'
            }, {
                cls: 'slider'
            }, {
                cls: 'time',
                html: '-0:00'
            }]
        }]
    },

    play: Ext.emptyFn,
    pause: Ext.emptyFn,
    updateUrl: Ext.emptyFn,

    updateEnableControls: function(enable) {
        this.media[enable ? 'show' : 'hide']();
    }

});