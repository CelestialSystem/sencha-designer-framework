xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Memory",
    "className": "Ext.data.proxy.Memory",
    "classAlias": "proxy.memory",
    "inherits": "Ext.data.proxy.Client",
    "autoName": "MyMemory",
    "typeAlias": [
        "Ext.data.MemoryProxy"
    ],
    "cfgs": [
        {
            "name": "clearOnRead",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "data",
            "type": "object",
            "bindable": true
        },
        {
            "name": "enablePaging",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
