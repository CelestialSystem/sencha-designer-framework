xds.component.Registry.addDefinition({
    "type": "Ext.ProgressBar",
    "className": "Ext.ProgressBar",
    "classAlias": "widget.progressbar",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.ProgressBase"
    ],
    "autoName": "MyProgressBar",
    "cfgs": [
        {
            "name": "animate",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-progress"
        },
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "text",
            "type": "string"
        },
        {
            "name": "textEl",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "update",
            "params": [
                {
                    "name": "progressbar",
                    "type": "Ext.ProgressBar",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "text",
                    "type": "String",
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
