xds.component.Registry.addDefinition({
    "type": "Ext.panel.Title",
    "className": "Ext.panel.Title",
    "classAlias": "widget.paneltitle",
    "inherits": "Ext.Component",
    "autoName": "MyTitle",
    "cfgs": [
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
            "name": "rotateIcon",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "rotation",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "0",
                    0
                ],
                [
                    "270",
                    270
                ],
                [
                    "90",
                    90
                ]
            ],
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "textAlign",
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
            "name": "weight",
            "type": "number",
            "defaultValue": -10,
            "bindable": true
        }
    ]
});
