Ext.define('xds.dtypes.Toolbar', {
    extend: 'Ext.Toolbar',
    alias: 'widget.xdtoolbar',

    xdsPrepareInlineEdit: function() {
        if (!this.getTitle()) {
            this.setTitle('&nbsp;');
        }
    }
});