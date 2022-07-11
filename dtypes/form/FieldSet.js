Ext.define('xds.dtypes.form.FieldSet', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.xdfieldset',

    xdsPrepareInlineEdit: function() {
        if (!this.getTitle()) {
            this.setTitle('&nbsp;');
        }
    }
});