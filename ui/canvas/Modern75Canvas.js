Ext4.define('xds.ui.canvas.Modern75Canvas', {
    requires: ['xds.ui.canvas.ModernCanvas']
}, function () {

    xds.ui.canvas.Modern75Canvas = Ext.extend(xds.ui.canvas.ModernCanvas, {});


    // Registered under the magic xtype {frameworkId}canvas so it can be
    // automatically resolved at project setup time
    Ext.reg('modern75canvas', xds.ui.canvas.Modern75Canvas);

});
