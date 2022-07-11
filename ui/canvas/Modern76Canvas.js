Ext4.define('xds.ui.canvas.Modern76Canvas', {
    requires: ['xds.ui.canvas.ModernCanvas']
}, function () {

    xds.ui.canvas.Modern76Canvas = Ext.extend(xds.ui.canvas.ModernCanvas, {});


    // Registered under the magic xtype {frameworkId}canvas so it can be
    // automatically resolved at project setup time
    Ext.reg('modern76canvas', xds.ui.canvas.Modern76Canvas);

});
