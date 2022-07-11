xds.component.Registry.addDefinition({
    override: "Ext.field.Time",
    typeAlias: "timefield",

    "transformGroup": null,
    "toolbox": {
        "name": "Time Field",
        "iconCls": "icon-time",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    ignoreCfgs: ["tabIndex", "store"],

    cfgs: [
        {
            // TODO this is marked with @hide in sdk, should it?
            "name": "component",
            "type": "object",
            "defaultValue": {
                useMask: true
            }
        },
        {
            name: "value",
            merge: true,
            type: "time",
            encodeType: "object",
            formatter: function(v) {
                return Ext4.encode({
                    year: v.getFullYear(),
                    month: v.getMonth() + 1,
                    day: v.getDate()
                });
            },
            alternates: [{
                type: 'object',
                encodeType: 'raw'
            }]
        }
    ],


    init: function() {
        var me = this;

        me.on({
            canvasdblclick: me.onCanvasDblClick,
            setup: me.onSetup,
            addchild: me.onAddChild,
            restorechild: me.onRestoreChild,
            scope: me
        });
    },

    onSetup: function() {
        // Set a default placeholder
        this.setCfgValue('placeHolder', 'HH:mm:ss A');

        // Create the default picker child
        this.createChild('timepanel');
    },

    onAddChild: function(child) {
        if (child.isType('timepanel')) {
            this.initTimePanel(child);
        }
    },

    onRestoreChild: function(child) {
        if (child.isType('timepanel')) {
            this.initTimePanel(child);
        }
    },

    initTimePanel: function(picker) {
        picker.disablePromoteToClass = true;
        picker.setReference('picker');
        picker.getDisplayName = function() {
            return 'Picker';
        };
        picker.syncDisplayNames();

        // The way the SDK lazily creates the picker makes it have an effective default of
        // hidden, ignoring any user-set value, so overwrite the hidden config with an invisible one
        picker.addCfg({
            name: 'hidden',
            type: 'boolean',
            hidden: true,
            defaultValue: true
        });
    },

    onCanvasDblClick: function(e) {
        // double-clicking on the input area will trigger showing the picker
        var me = this;
        e = e.browserEvent;
        xds.canvas.messaging.call('isPointInFieldInput', me.getId(), e.originalX, e.originalY)
            .then(function(isWithin) {
                if (isWithin) {
                    me.child('timepanel').activate();
                }
            });
    }
});
