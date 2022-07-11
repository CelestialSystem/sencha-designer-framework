Ext.define('xds.dtypes.field.DatePicker', {
    extend: 'Ext.field.DatePicker',
    alias: 'widget.xddatepickerfield',

    /**
     * The date Picker instance is created lazily upon first call of getPicker() -- call
     * it up front so we can rely on it existing in the DOM for dynamic show/hide calls.
     */
    initialize: function() {
        this.callParent(arguments);
        this.getPicker();
    },

    /**
     * Prevent picker from being destroyed on hide even if the config to do so is set.
     */
    applyDestroyPickerOnHide: function() {
        return false;
    }
});