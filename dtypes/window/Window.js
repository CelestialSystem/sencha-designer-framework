Ext.define('xds.dtypes.window.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.xdwindow',
    autoRender: false,
    floating: false,
    draggable: false,

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        me.show();
    },

    afterRender: function() {
        this.callParent();
        // TrunkDiff: Typically overflow hidden is set via the css
        // class x-layer. This is only the case when floating
        this.el.setStyle('overflow', 'hidden');

        if (!this.resizable) {
            this.el.setStyle('position', 'relative');
        }
    },


    maximize: function() {
        var me = this;

        if (!me.maximized) {
            me.expand(false);
            if (!me.hasSavedRestore) {
                me.restoreSize = me.getSize();
                me.restorePos = me.getPosition(true);
            }
            if (me.maximizable) {
                me.tools.maximize.hide();
                me.tools.restore.show();
            }
            me.maximized = true;
            // TrunkDiff: typically windows aren't floating: false
            // and maximized. Designer is a rarecase. check to see if
            // disableShadow has been mixed in before invoking it.
            if (me.el.disableShadow) {
                me.el.disableShadow();
            }


            if (me.dd) {
                me.dd.disable();
            }
            if (me.collapseTool) {
                me.collapseTool.hide();
            }
            me.el.addCls(Ext.baseCSSPrefix + 'window-maximized');
            me.container.addCls(Ext.baseCSSPrefix + 'window-maximized-ct');

            me.syncMonitorWindowResize();
            me.setPosition(0, 0);
            me.fitContainer();
            me.fireEvent('maximize', me);
        }
        return me;
    },

    // Currently, Windows are always top level components, if at some point we allow
    // them to become items or allow users to renderTo a particular container in the
    // designer we will have to adjust this to not just rely on using the canvas directly.
    fitContainer: function() {
        this.setSize(Ext.Element.getViewSize());
    }
});
