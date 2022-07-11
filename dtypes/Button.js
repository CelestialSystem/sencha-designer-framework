Ext.define('xds.dtypes.Button', {
    extend: 'Ext.Button',
    alias: 'widget.xdbutton',

    xdsPrepareInlineEdit: function() {
        this.textElement.show();
    }
});