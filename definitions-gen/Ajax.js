xds.component.Registry.addDefinition({
    "type": "Ext.Ajax",
    "className": "Ext.Ajax",
    "inherits": "Ext.data.Connection",
    "autoName": "MyAjax",
    "cfgs": [
        {
            "name": "autoAbort",
            "type": "boolean",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "defaultHeaders",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "disableCaching",
            "type": "boolean",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "extraParams",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "method",
            "type": "string",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "timeout",
            "type": "number",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
