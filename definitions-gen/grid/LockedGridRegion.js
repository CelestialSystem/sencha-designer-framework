xds.component.Registry.addDefinition({
    "type": "Ext.grid.LockedGridRegion",
    "className": "Ext.grid.LockedGridRegion",
    "classAlias": "widget.lockedgridregion",
    "inherits": "Ext.Panel",
    "autoName": "MyLockedGridRegion",
    "cfgs": [
        {
            "name": "grid",
            "type": "object",
            "defaultValue": {
                "xtype": "grid",
                "manageHorizontalOverflow": false,
                "hideScrollbar": true,
                "reserveScrollbar": true,
                "scrollable": {
                    "x": true,
                    "y": true
                }
            },
            "bindable": true
        },
        {
            "name": "locked",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "menuLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "regionKey",
            "type": "string",
            "bindable": true
        }
    ]
});
