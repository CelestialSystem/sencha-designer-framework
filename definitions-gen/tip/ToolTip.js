xds.component.Registry.addDefinition({
    "type": "Ext.tip.ToolTip",
    "className": "Ext.tip.ToolTip",
    "classAlias": "widget.tooltip",
    "inherits": "Ext.Panel",
    "autoName": "MyToolTip",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "l-r?",
            "bindable": true
        },
        {
            "name": "alignDelegate",
            "type": "string",
            "bindable": true
        },
        {
            "name": "allowOver",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "anchorToTarget",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoHide",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "delegate",
            "type": "string",
            "bindable": true
        },
        {
            "name": "dismissDelay",
            "type": "number",
            "defaultValue": 5000,
            "bindable": true
        },
        {
            "name": "hideDelay",
            "type": "number",
            "defaultValue": 300,
            "bindable": true
        },
        {
            "name": "mouseOffset",
            "type": "array",
            "defaultValue": [
                15,
                18
            ],
            "bindable": true
        },
        {
            "name": "quickShowInterval",
            "type": "number",
            "defaultValue": 250,
            "bindable": true
        },
        {
            "name": "showDelay",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        },
        {
            "name": "showOnTap",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "target",
            "type": "object",
            "bindable": true
        },
        {
            "name": "trackMouse",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
