Ext.define('xds.dtypes.dataview.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.xdlist',

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
    },

    updateStore: function(newStore, oldStore) {
        var me = this,
            grouper;

        // this safety check will avoid a framework error if we've got "Grouped" set to
        // true, but have no Grouper function set in the associated store.
        if (newStore && me.getGrouped()) {
            grouper = newStore.getGrouper();
            if (!grouper) {
                me.setGrouped(false);
            }
        }
        this.callParent(arguments);
    }

});