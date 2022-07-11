Ext.define('xds.dtypes.Img', {
    extend: 'Ext.Img',
    alias: 'widget.xdimage',

    xdsState: 'loading',
    xdsShrink: false,

    initComponent: function() {
        this.callParent(arguments);
        if (this.xdsState === 'unset') {
            this.addCls('xds-img-unset');
        }
        if (this.xdsShrink) {
            this.addCls('xds-img-shrink');
        }
    }

});