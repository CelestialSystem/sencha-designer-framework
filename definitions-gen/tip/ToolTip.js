xds.component.Registry.addDefinition({
    "type": "Ext.tip.ToolTip",
    "className": "Ext.tip.ToolTip",
    "classAlias": "widget.tooltip",
    "inherits": "Ext.tip.Tip",
    "autoName": "MyToolTip",
    "typeAlias": [
        "Ext.ToolTip"
    ],
    "cfgs": [
        {
            "name": "anchor",
            "type": "string"
        },
        {
            "name": "anchorToTarget",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoHide",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "defaultAlign",
            "type": "string",
            "defaultValue": "bl-tl"
        },
        {
            "name": "delegate",
            "type": "string"
        },
        {
            "name": "dismissDelay",
            "type": "number",
            "defaultValue": 5000
        },
        {
            "name": "fadeOutDuration",
            "type": "number",
            "defaultValue": 1000
        },
        {
            "name": "hideAction",
            "type": "string",
            "defaultValue": "hide"
        },
        {
            "name": "hideDelay",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "mouseOffset",
            "type": "array",
            "defaultValue": [
                15,
                18
            ]
        },
        {
            "name": "showDelay",
            "type": "number",
            "defaultValue": 500
        },
        {
            "name": "showOnTap",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "target",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "targetOffset",
            "type": "array",
            "defaultValue": [
                0,
                0
            ]
        },
        {
            "name": "trackMouse",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
