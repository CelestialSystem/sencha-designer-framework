Ext.define('xds.dtypes.view.View', {
    extend: 'Ext.view.View',
    alias: 'widget.xddataview',

    initComponent: function() {
        var me = this;

        // if there is no tpl or itemTpl then framework will throw an error
        if (!me.tpl && !me.itemTpl) {
            // avoid error by creating an Xtemplate
            me.tpl = new Ext.XTemplate('');
        }
        me.callParent(arguments);
    }
});