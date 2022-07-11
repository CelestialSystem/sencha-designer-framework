Ext.define('xds.dtypes.resizer.Splitter', {
    extend: 'Ext.resizer.Splitter',
    alias: 'widget.xdsplitter',

    /**
     * Override before/onRender to handle the case when the user adds a splitter but there is not
     * yet a panel on either side of it. The SDK code doesn't expect this and results in an
     * error, but we can't error while the user is partway through building the UI.
     */
    beforeRender : function() {
        var me = this,
            target = me.getCollapseTarget();
        if (target) {
            me.callParent(arguments);
        } else {
            Ext.resizer.Splitter.superclass.beforeRender.apply(me, arguments); //skip parent
        }
    },
    onRender : function() {
        var me = this,
            target = me.getCollapseTarget();
        if (target) {
            me.callParent(arguments);
        } else {
            Ext.resizer.Splitter.superclass.onRender.apply(me, arguments); //skip parent
        }
    }
});