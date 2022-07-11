xds.component.Registry.addDefinition({
    "type": "Ext.data.identifier.Uuid",
    "className": "Ext.data.identifier.Uuid",
    "classAlias": "data.identifier.uuid",
    "inherits": "Ext.data.identifier.Generator",
    "autoName": "MyUuid",
    "cfgs": [
        {
            "name": "clockSeq",
            "type": "number"
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "salt",
            "type": "number",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "timestamp",
            "type": "number",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "version",
            "type": "number",
            "defaultValue": 4
        }
    ]
});
