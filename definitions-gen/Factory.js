xds.component.Registry.addDefinition({
    "type": "Ext.Factory",
    "className": "Ext.Factory",
    "autoName": "MyFactory",
    "cfgs": [
        {
            "name": "aliasPrefix",
            "type": "string"
        },
        {
            "name": "creator",
            "type": "string",
            "defaultValue": "'create' + Ext.String.capitalize(me.name)"
        },
        {
            "name": "defaultProperty",
            "type": "string",
            "defaultValue": "type"
        },
        {
            "name": "defaultType",
            "type": "string"
        },
        {
            "name": "instanceProp",
            "type": "string",
            "defaultValue": "isInstance"
        },
        {
            "name": "typeProperty",
            "type": "string",
            "defaultValue": "type"
        },
        {
            "name": "xclass",
            "type": "string"
        }
    ]
});
