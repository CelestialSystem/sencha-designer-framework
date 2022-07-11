Ext.define('xds.dtypes.container.Container', {
    extend: 'Ext.container.Container',
    alias: 'widget.xdcontainer',

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