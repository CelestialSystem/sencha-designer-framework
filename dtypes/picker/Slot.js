Ext.define('xds.dtypes.picker.Slot', {
    extend: 'Ext.picker.Slot',
    alias: 'widget.xdpickerslot',

    xdsPrepareInlineEdit: function() {
        var me = this;
        if (me.parent.getUseTitles() && !me.getTitle()) {
            me.setTitle('&nbsp;');
        }
    }
});