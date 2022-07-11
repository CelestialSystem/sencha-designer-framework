xds.component.Registry.addDefinition({
    "type": "Ext.Sheet",
    "className": "Ext.Sheet",
    "classAlias": "widget.sheet",
    "inherits": "Ext.Panel",
    "autoName": "MySheet",
    "cfgs": [
        {
            "name": "centered",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "cover",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "enter",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "exit",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "reveal",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "side",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "bindable": true
        },
        {
            "name": "stretchX",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "stretchY",
            "type": "boolean",
            "bindable": true
        }
    ]
});
