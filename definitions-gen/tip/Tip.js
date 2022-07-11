xds.component.Registry.addDefinition({
    "type": "Ext.tip.Tip",
    "className": "Ext.tip.Tip",
    "classAlias": "widget.tip",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyTip",
    "typeAlias": [
        "Ext.Tip"
    ],
    "cfgs": [
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "closeAction",
            "type": "string",
            "defaultValue": "hide"
        },
        {
            "name": "constrainPosition",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "maxWidth",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        },
        {
            "name": "minWidth",
            "type": "number",
            "defaultValue": 40,
            "bindable": true
        },
        {
            "name": "shadow",
            "type": "boolean",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": "auto",
            "bindable": true
        }
    ]
});
