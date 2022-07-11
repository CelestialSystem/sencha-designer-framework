Ext.define('xds.dtypes.form.field.HtmlEditor', {
    extend: 'Ext.form.field.HtmlEditor',
    alias: 'widget.xdhtmleditor',
    initFrameDoc: Ext.emptyFn,
    execCmd: Ext.emptyFn,

    checkDesignMode: function() {
        // Prevent repeated sandbox violation errors
        Ext.TaskManager.stop(this.monitorTask);
    },

    relayCmd: function(cmd, value) {
        Ext.defer(function() {
            var me = this;
            if (!this.isDestroyed) {
            	// TRUNKDIFF: me.win was undefined causing framework error.
            	// This is due to initFrameDoc being made an empty function above.
            	// So I have removed the focus call altogether.
            	me.execCmd(cmd, value);
            	me.updateToolbar();
            }
        }, 10, this);
    },

    // TRUNKDIFF temporary workaround for SDK error when enableFont:false - see EXTJSIV-9142
    // This only prevents the error in the canvas, it'll still happen in the
    // browser until Ext 4.2.1 is released with the fix.
    initDefaultFont: function() {
        if (this.enableFont) {
            this.callParent();
        }
    }
});