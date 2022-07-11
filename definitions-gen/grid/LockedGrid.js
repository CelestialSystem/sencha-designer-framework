xds.component.Registry.addDefinition({
    "type": "Ext.grid.LockedGrid",
    "className": "Ext.grid.LockedGrid",
    "classAlias": "widget.lockedgrid",
    "inherits": "Ext.Container",
    "autoName": "MyLockedGrid",
    "cfgs": [
        {
            "name": "columnMenu",
            "type": "object",
            "defaultValue": {
                "items": {
                    "region": {
                        "text": "Region",
                        "menu": {}
                    }
                }
            },
            "bindable": true
        },
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "defaultLockedRegion",
            "type": "string",
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "gridDefaults",
            "type": "object",
            "bindable": true
        },
        {
            "name": "hideHeaders",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "itemConfig",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "leftGridDefaults",
            "type": "object",
            "defaultValue": {
                "locked": true
            },
            "bindable": true
        },
        {
            "name": "regions",
            "type": "object",
            "defaultValue": {
                "left": {
                    "menuLabel": "Locked (Left)",
                    "weight": -10
                },
                "center": {
                    "flex": 1,
                    "menuLabel": "Unlocked",
                    "weight": 0
                },
                "right": {
                    "menuLabel": "Locked (Right)",
                    "weight": 10
                }
            },
            "bindable": true
        },
        {
            "name": "rightGridDefaults",
            "type": "object",
            "defaultValue": {
                "locked": true
            },
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "variableHeights",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
