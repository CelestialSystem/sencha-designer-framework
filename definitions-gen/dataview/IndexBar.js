xds.component.Registry.addDefinition({
    "type": "Ext.dataview.IndexBar",
    "className": "Ext.dataview.IndexBar",
    "classAlias": "widget.indexbar",
    "inherits": "Ext.Component",
    "autoName": "MyIndexBar",
    "typeAlias": [
        "Ext.IndexBar"
    ],
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "autoHide",
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
            "name": "direction",
            "type": "string",
            "editor": "options",
            "options": [
                "horizontal",
                "vertical"
            ],
            "defaultValue": "vertical",
            "bindable": true
        },
        {
            "name": "dynamic",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "indicator",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "letters",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "bindable": true
        },
        {
            "name": "listPrefix",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "index",
            "params": [
                {
                    "name": "indexbar",
                    "type": "Ext.dataview.IndexBar",
                    "optional": true
                },
                {
                    "name": "html",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "Ext.dom.Element",
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
            "name": "beforedirectionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.dataview.IndexBar",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "'vertical'/'horizontal'",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "'vertical'/'horizontal'",
                    "optional": true
                },
                {
                    "type": "Boolean",
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
            "name": "directionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.dataview.IndexBar",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "'vertical'/'horizontal'",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "'vertical'/'horizontal'",
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
