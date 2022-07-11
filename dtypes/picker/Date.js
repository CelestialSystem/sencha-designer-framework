Ext.define('xds.dtypes.picker.Date', {
    extend: 'Ext.picker.Date',
    alias: 'widget.xddatepicker',

    /**
     * Add a class to each of the month/day/year slots so they can be easily identified by selectors
     */
    applySlots: function(slots) {
        slots = this.callParent(arguments);
        if (Ext.isArray(slots)) {
            slots.forEach(function(slot) {
                slot.cls = 'x-picker-slot x-picker-slot-' + slot.name;
            });
        }
        return slots;
    }
});
