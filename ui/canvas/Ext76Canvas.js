Ext4.define('xds.ui.canvas.Ext76Canvas', {
    requires : [
        'xds.ui.canvas.Canvas'
    ]
}, function() {

    xds.ui.canvas.Ext76Canvas = Ext.extend(xds.ui.canvas.Canvas, {
        /**
         * @override
         * Pre-emptively disable cache busting, so the framework doesn't attempt to
         * check document.cookie which throws a security error in the sandboxed canvas iframe.
         */
        iframeSrc: 'src/frameworks/canvas-frame.html?disableCacheBuster'
    });

    // Registered under the magic xtype {frameworkId}canvas so it can be
    // automatically resolved at project setup time
    Ext.reg('ext76canvas', xds.ui.canvas.Ext76Canvas);

});
