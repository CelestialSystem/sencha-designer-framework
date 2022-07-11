xds.component.Registry.addDefinition({
    "type": "Ext.LoadMask",
    "className": "Ext.LoadMask",
    "classAlias": "widget.loadmask",
    "inherits": "Ext.Mask",
    "autoName": "MyLoadMask",
    "cfgs": [
        {
            "name": "cls",
            "type": "string",
            "defaultValue": "x-loading-mask",
            "bindable": true
        },
        {
            "name": "indicator",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Loading...",
            "bindable": true
        },
        {
            "name": "messageCls",
            "type": "string",
            "defaultValue": "x-mask-message",
            "bindable": true
        }
    ]
});
