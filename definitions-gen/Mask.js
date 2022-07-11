xds.component.Registry.addDefinition({
    "type": "Ext.Mask",
    "className": "Ext.Mask",
    "classAlias": "widget.mask",
    "inherits": "Ext.Component",
    "autoName": "MyMask",
    "cfgs": [
        {
            "name": "bottom",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "left",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "right",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "top",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "transparent",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "tap",
            "params": [
                {
                    "name": "mask",
                    "type": "Ext.Mask",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.EventObject",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
