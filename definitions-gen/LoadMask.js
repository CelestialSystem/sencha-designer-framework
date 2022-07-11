xds.component.Registry.addDefinition({
    "type": "Ext.LoadMask",
    "className": "Ext.LoadMask",
    "classAlias": "widget.loadmask",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyLoadMask",
    "cfgs": [
        {
            "name": "msg",
            "type": "string",
            "defaultValue": "Loading..."
        },
        {
            "name": "shim",
            "type": "boolean"
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "target",
            "type": "object"
        },
        {
            "name": "useMsg",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "useTargetEl",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
