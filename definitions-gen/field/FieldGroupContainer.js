xds.component.Registry.addDefinition({
    "type": "Ext.field.FieldGroupContainer",
    "className": "Ext.field.FieldGroupContainer",
    "classAlias": "widget.groupcontainer",
    "inherits": "Ext.field.Container",
    "autoName": "MyGroupContainer",

    "cfgs": [
        {
            "name": "verticle",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "fieldsName",
            "type": "string"
        },
        {
            "name": "defaultFieldValue",
            "type": "object",
            "defaultValue": "on"
        }
    ]
});