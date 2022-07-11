Ext.define('xds.dtypes.dataview.DataView', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.xddataview',

    applyItemConfig: function(itemConfig) {
        // Remove the instance ref from the itemConfig, but hang on to it for later
        this.itemConfigInstanceRef = itemConfig.instance;
        delete itemConfig.instance;
        delete itemConfig.id;
        return itemConfig;
    },

    getDataItemConfig: function(xtype, record, itemConfig) {
        // Reinstate the instance ref only on the first item
        if (record === this.getStore().getAt(0)) {
            itemConfig = Ext.applyIf({instance: this.itemConfigInstanceRef}, itemConfig);
        }
        return this.callParent([xtype, record, itemConfig]);
    }
});