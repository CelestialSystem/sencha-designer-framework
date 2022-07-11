xds.component.Registry.addDefinition({
    "type": "Ext.exporter.data.Base",
    "className": "Ext.exporter.data.Base",
    "inherits": "Ext.Base",
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "autoGenerateId",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoGenerateKey",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        }
    ]
});
