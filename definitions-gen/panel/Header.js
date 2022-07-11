xds.component.Registry.addDefinition({
    "type": "Ext.panel.Header",
    "className": "Ext.panel.Header",
    "classAlias": "widget.header",
    "inherits": "Ext.panel.Bar",
    "autoName": "MyHeader",
    "cfgs": [
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "icon",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemPosition",
            "type": "number"
        },
        {
            "name": "title",
            "type": "string",
            "defaultValue": {
                "$value": {
                    "xtype": "title",
                    "flex": 1
                }
            },
            "bindable": true
        },
        {
            "name": "titleAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "titlePosition",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "titleRotation",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "default",
                    "default"
                ],
                [
                    "0",
                    0
                ],
                [
                    "1",
                    1
                ],
                [
                    "2",
                    2
                ]
            ],
            "defaultValue": "default",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "click",
            "params": [
                {
                    "name": "header",
                    "type": "Ext.panel.Header",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "dblclick",
            "params": [
                {
                    "name": "header",
                    "type": "Ext.panel.Header",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
