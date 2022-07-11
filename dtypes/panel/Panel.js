Ext.define('xds.dtypes.panel.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xdpanel',

    afterRender: function() {
        var me = this,
            tpl;

        me.callParent(arguments);

        tpl = me.tpl;
        if (tpl && !me.initialConfig.data) {
            if (Ext.isString(tpl) || Ext.isArray(tpl)) {
                tpl = me.tpl = Ext.create('Ext.XTemplate', tpl);
            }
            Ext.DomHelper.append(me.getContentTarget(), {
                tag: 'pre',
                cls: 'xds-tpl',
                html: Ext.String.htmlEncode(tpl.html)
            });
        }
    }
});
