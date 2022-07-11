xds.component.Registry.addDefinition({
    override: "Ext.Sheet",
    typeAlias: "sheet",

    "toolbox": {
        "name": "Sheet",
        "iconCls": "icon-sheet",
        "category": "Containers",
        "groups": ["Containers","Views"]
    },

    "fullscreenAtTopLevel": false,

    ignoreCfgs: ['docked'],

    init: function() {
        var me = this;
        me.on({
            canvasconfig: me.onCanvasConfig,
            create: me.addInstanceActivateListener,
            restore: me.addInstanceActivateListener,
            linkedinstance: me.onLinkedInstance,
            scope: me
        });
    },

    /**
     * Start listening for activation of any instance in the project
     */
    addInstanceActivateListener: function() {
        var me = this;
        me.subscribe('instance:activate', me.onAnyInstanceActivate, me);
    },

    /**
     * Handle the activation of any instance in the project. If the activated intance is this
     * sheet or one of its descendants, show the sheet. Otherwise, hide it.
     */
    onAnyInstanceActivate: function(instance) {
        var me = this;
        if (me.top() === xds.canvas.topInstance) {
            xds.canvas.messaging.call(
                (me.shouldSheetBeVisible(instance) ? 'showComponent' : 'hideComponent'),
                me.getId()
            );
        }
    },

    shouldSheetBeVisible: function(activeInstance) {
        var me = this,
            parent = me.parent();
        if (me === activeInstance || me.isAncestorOf(activeInstance)) {
            // Active instance is within the sheet, should be visible
            return true;
        } else if (parent && parent.isAncestorOf(activeInstance)) {
            // Active instance is within a sibling of the sheet, should be hidden
            return false;
        } else {
            // Use the value of the hidden config
            return !me.getCfgValueOrDefault('hidden');
        }
    },

    onLinkedInstance: function(linkedInstance) {
        // We want any linked instances of this Sheet to have the same show/hide
        // behavior, so copy those methods over and initialize the listener.
        var me = this;
        linkedInstance.addInstanceActivateListener = me.addInstanceActivateListener;
        linkedInstance.onAnyInstanceActivate = me.onAnyInstanceActivate;
        linkedInstance.shouldSheetBeVisible = me.shouldSheetBeVisible;
        linkedInstance.addInstanceActivateListener();
        linkedInstance.on('canvasconfig', linkedInstance.onCanvasConfig, linkedInstance);
    },

    /**
     * Force the sheet to be visible on the canvas if the current selection is within the
     * sheet, or to be hidden if the selection is within a sibling of the sheet.
     */
    onCanvasConfig: function(config) {
        config.hidden = !this.shouldSheetBeVisible(xds.canvas.activeInstance);
        return config;
    }
});
