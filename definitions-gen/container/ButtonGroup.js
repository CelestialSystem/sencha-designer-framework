xds.component.Registry.addDefinition({
    "type": "Ext.container.ButtonGroup",
    "className": "Ext.container.ButtonGroup",
    "classAlias": "widget.buttongroup",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyButtonGroup",
    "typeAlias": [
        "Ext.ButtonGroup"
    ],
    "cfgs": [
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-btn-group"
        },
        {
            "name": "columns",
            "type": "number"
        },
        {
            "name": "defaultButtonUI",
            "type": "string"
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "button"
        },
        {
            "name": "focusableContainer",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "frame",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "frameHeader",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": {
                "type": "table"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "titleAlign",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        }
    ]
});
