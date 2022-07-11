Ext.define('xds.dtypes.grid.column.Template', {
    extend: 'Ext.grid.column.Template',
    alias: 'widget.xdtemplatecolumn',

    constructor: function(cfg) {
        var me = this;

        if (!cfg.tpl) {
            cfg.tpl = '{string}';
        }

        me.callParent([cfg]);
    }
});