xds.component.Registry.addDefinition({
    "type": "Ext.plugin.AbstractClipboard",
    "className": "Ext.plugin.AbstractClipboard",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyAbstractClipboard",
    "cfgs": [
        {
            "name": "formats",
            "type": "object",
            "defaultValue": {
                "text": {
                    "get": "getTextData",
                    "put": "putTextData"
                }
            },
            "bindable": true
        },
        {
            "name": "memory",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "source",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "system",
            "bindable": true
        },
        {
            "name": "system",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        }
    ]
});
