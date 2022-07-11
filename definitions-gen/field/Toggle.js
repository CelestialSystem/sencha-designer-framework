xds.component.Registry.addDefinition({
    "type": "Ext.field.Toggle",
    "className": "Ext.field.Toggle",
    "classAlias": "widget.togglefield",
    "inherits": "Ext.field.SingleSlider",
    "autoName": "MyToggle",
    "typeAlias": [
        "Ext.form.Toggle"
    ],
    "cfgs": [
        {
            "name": "activeLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "bodyAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "end",
                "start",
                "stretch"
            ],
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "inactiveLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "value": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "slider",
            "type": "object",
            "defaultValue": {
                "xtype": "toggleslider"
            },
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "value": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "value",
            "type": "number",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "togglefield",
                    "type": "Ext.field.Toggle",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "oldValue",
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
            "name": "drag",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragend",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragstart",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
