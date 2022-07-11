xds.component.Registry.addDefinition({
    "type": "Ext.MessageBox",
    "className": "Ext.MessageBox",
    "classAlias": "widget.messagebox",
    "inherits": "Ext.Dialog",
    "autoName": "MyMessageBox",
    "cfgs": [
        {
            "name": "buttons",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "closeAction",
            "type": "string",
            "defaultValue": "hide",
            "bindable": true
        },
        {
            "name": "defaultTextHeight",
            "type": "number",
            "defaultValue": 75,
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "vbox",
                "pack": "center"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "message",
            "type": "string",
            "bindable": true
        },
        {
            "name": "prompt",
            "type": "object",
            "bindable": true
        }
    ]
});
