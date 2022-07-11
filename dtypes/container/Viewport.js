/**
 * Masquerade a normal Container as the Viewport, so that it doesn't take over the body
 * element. Its size is synced to the body size on each resize.
 */
Ext.define('xds.dtypes.container.Viewport', {
    extend: 'Ext.container.Container',
    alias: 'widget.xdviewport',

    cls: Ext.baseCSSPrefix + 'viewport',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        Ext.EventManager.onWindowResize(me.syncSize, me);
        me.on('afterrender', me.syncSize, me, {single: true});
    },

    syncSize: function() {
        var me = this;
        if (!me.isDestroyed) {
            me.setSize(Ext.Element.getViewSize());
        }
    }
});