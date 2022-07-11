xds.component.Registry.addDefinition({
    "type": "Ext.viewport.Default",
    "className": "Ext.viewport.Default",
    "classAlias": "widget.viewport",
    "inherits": "Ext.Container",
    "autoName": "MyDefault",
    "cfgs": [
        {
            "name": "layout",
            "type": "object",
            "defaultValue": "card",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "preventZooming",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "swipeThreshold",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "maximize",
            "params": [
                {
                    "name": "viewport",
                    "type": "Ext.Viewport",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "orientationchange",
            "params": [
                {
                    "name": "viewport",
                    "type": "Ext.Viewport",
                    "optional": true
                },
                {
                    "name": "newOrientation",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "ready",
            "params": [
                {
                    "name": "viewport",
                    "type": "Ext.Viewport",
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
