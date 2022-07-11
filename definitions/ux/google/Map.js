xds.component.Registry.addDefinition({
    override: "Ext.ux.google.Map",
    typeAlias: "map",
    canvasAlias: "widget.xdmap",

    toolbox: {
        "name": "Map",
        "iconCls": "icon-map",
        "category": "Standard",
        "groups": ["Views"]
    },
    // This component does not support auto widthing and will be set with default width on docking
    "setAutoWidth": true,

    // Don't allow child components even though it technically inherits from Container
    validChildTypes: [],

    ignoreCfgs: [
        "tpl",
        "tplWriteMode",
        "data",
        "layout",
        "map", // not settable
        "scrollable"
    ],

    cfgs: [{
        name: "useCurrentLocation",
        merge: true,
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.ex('delete', me.onDelete, me);
    },

    onSetup: function() {
        if (!this.hasWidthFromParentLayout()) {
            this.setCfgValue('width', 300);
        }
        if (!this.hasHeightFromParentLayout()) {
            this.setCfgValue('height', 200);
        }

        // Add the gmaps api resource if not already present
        var resourceCategory = xds.component.Registry.getRootInstance('resource'),
            resource = resourceCategory.child('googlemapsjsresource');
        if (!resource) {
            resourceCategory.createChild('googlemapsjsresource');
        }
    },

    onDelete: function() {
        // Offer to remove the gmaps api resource if no other maps present
        var registry = xds.component.Registry,
            otherMap = registry.getRootInstance('component').down('map'),
            resource = registry.getRootInstance('resource').child('googlemapsjsresource'),
            dialog;
        if (!otherMap && resource) {
            dialog = new xds.ui.Dialog({
                html: xds.Resource.get('googleMaps').confirmDeleteResource,
                buttons: [{
                    xtype: 'button',
                    cls: 'xds-button',
                    text: xds.Resource.get('buttons').no,
                    handler: function() {
                        dialog.close();
                    }
                }, {
                    xtype: 'button',
                    cls: 'xds-btn-primary',
                    text: xds.Resource.get('buttons').yes,
                    handler: function() {
                        dialog.close();
                        resource.remove();
                    }
                }]
            });
            dialog.show();
        }
    }
});
