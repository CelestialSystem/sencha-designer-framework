Ext.define('xds.dtypes.Video', {
    extend: 'Ext.Video',
    alias: 'widget.xdvideo',

    /**
     * Override the media element with a plain div, to prevent errors in Ion in Windows
     * and to allow custom styling of the placeholder.
     */
    getTemplate: function() {
        return [{
            reference: 'ghost',
            cls: Ext.baseCSSPrefix + 'video-ghost'
        }, {
            reference: 'media',
            tag: 'div',
            cls: Ext.baseCSSPrefix + 'media'
        }]
    },

    play: Ext.emptyFn,
    pause: Ext.emptyFn,
    updateUrl: Ext.emptyFn
});