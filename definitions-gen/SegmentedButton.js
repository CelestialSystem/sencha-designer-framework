xds.component.Registry.addDefinition({
    "type": "Ext.SegmentedButton",
    "className": "Ext.SegmentedButton",
    "classAlias": "widget.segmentedbutton",
    "inherits": "Ext.Container",
    "autoName": "MySegmentedButton",
    "typeAlias": [
        "Ext.button.Segmented"
    ],
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
            "name": "autoSize",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "defaults",
            "type": "object",
            "defaultValue": {
                "flex": "1 1 auto"
            },
            "bindable": true
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "button",
            "bindable": true
        },
        {
            "name": "defaultUI",
            "type": "string",
            "defaultValue": "segmented",
            "bindable": true
        },
        {
            "name": "forceSelection",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "box",
                "vertical": false,
                "align": "stretch"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "pressedButtons",
            "type": "array",
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": "value",
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
            "defaultValue": "value",
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
                    "type": "Ext.SegmentedButton",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object/Object[]",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Object/Object[]",
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
                    "type": "Ext.SegmentedButton",
                    "optional": true
                },
                {
                    "name": "button",
                    "type": "Ext.Button",
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
