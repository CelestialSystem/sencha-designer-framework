xds.component.Registry.addDefinition({
    "type": "Ext.button.Segmented",
    "className": "Ext.button.Segmented",
    "classAlias": "widget.segmentedbutton",
    "inherits": "Ext.container.Container",
    "autoName": "MySegmented",
    "cfgs": [
        {
            "name": "allowDepress",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "allowMultiple",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "allowToggle",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-segmented-button"
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "button"
        },
        {
            "name": "defaultUI",
            "type": "string",
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "forceSelection",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "value"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": [
                "value"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "value",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "segmentedbutton",
                    "type": "Ext.button.Segmented",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Array",
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
            "name": "toggle",
            "params": [
                {
                    "name": "segmentedbutton",
                    "type": "Ext.button.Segmented",
                    "optional": true
                },
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "isPressed",
                    "type": "Boolean",
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
