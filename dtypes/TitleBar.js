Ext.define('xds.dtypes.TitleBar', {
    extend: 'Ext.TitleBar',
    alias: 'widget.xdtitlebar',

    xdsPrepareInlineEdit: function() {
        if (!this.getTitle()) {
            this.setTitle('&nbsp;');
        }
    }
});