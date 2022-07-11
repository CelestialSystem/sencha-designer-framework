Ext.define('xds.dtypes.toolbar.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.xdtoolbar',
    afterRender : function() {
        var me = this;
        // prevent from collapsing when it has no children yet
        if (!me.items || me.items.length < 1) {
            if (me.vertical) {
                me.width = me.width || 65
            } else {
                me.height = me.height || 27;
            }
        }
        me.callParent(arguments);
    }
});