xds.component.Registry.addDefinition({
    "type": "Ext.panel.Time",
    "className": "Ext.panel.Time",
    "classAlias": "widget.timepanel",
    "inherits": "Ext.Panel",
    "mixin": [
        "Ext.mixin.ConfigProxy"
    ],
    "autoName": "MyTime",
    "cfgs": [
        {
            "name": "autoAdvance",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "buttonAlign",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "confirmable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "declineHandler",
            "type": "function"
        },
        {
            "name": "defaultButtons",
            "type": "object"
        },
        {
            "name": "handler",
            "type": "function"
        },
        {
            "name": "scope",
            "type": "object",
            "defaultValue": "this"
        },
        {
            "name": "value",
            "type": "date"
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "meridiem",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "alignPMInside",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "hourDisplayFormat",
            "type": "string",
            "defaultValue": "G"
        }
    ]
});
