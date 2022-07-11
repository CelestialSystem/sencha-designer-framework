xds.component.Registry.addDefinition({
    "type": "Ext.Chip",
    "className": "Ext.Chip",
    "classAlias": "widget.chip",
    "inherits": "Ext.Component",
    "autoName": "MyChip",
    "cfgs": [
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "closeHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "closeHandler"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "icon",
            "type": "string",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
