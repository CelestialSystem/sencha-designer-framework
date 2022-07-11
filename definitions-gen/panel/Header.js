xds.component.Registry.addDefinition({
    "type": "Ext.panel.Header",
    "className": "Ext.panel.Header",
    "classAlias": "widget.panelheader",
    "inherits": "Ext.Container",
    "autoName": "MyHeader",
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
            "name": "title",
            "type": "string",
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
            "name": "titleRotation",
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
                ],
                [
                    "auto",
                    "auto"
                ]
            ],
            "defaultValue": "auto",
            "bindable": true
        }
    ]
});
