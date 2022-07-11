/**
 * This dtype for the navigation.View.
 */
Ext.define('xds.dtypes.navigation.View', {
    extend: 'Ext.navigation.View',
    alias: 'widget.xdnavigationview',

    applyActiveItem: function(activeItem, currentActiveItem) {
        var me = this,
            innerItems = me.getInnerItems();

        // Make sure the items are already initialized
        me.getItems();

        //TRUNK DIFF dont change active item implicitly so that the user can configure current activeItem
        //if (!me.initialized) {
            //activeItem = innerItems.length - 1;
        //}
        // TRUNK DIFF - call the container applyActiveItem (bypass the parent which has the above issue)
        return Ext.navigation.View.superclass.applyActiveItem.call(this, activeItem, currentActiveItem);
    }
});