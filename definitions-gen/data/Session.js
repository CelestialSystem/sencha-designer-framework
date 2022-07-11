xds.component.Registry.addDefinition({
    "type": "Ext.data.Session",
    "className": "Ext.data.Session",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Dirty",
        "Ext.mixin.Observable"
    ],
    "autoName": "MySession",
    "cfgs": [
        {
            "name": "autoDestroy",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "parent",
            "type": "object",
            "bindable": true
        },
        {
            "name": "schema",
            "type": "string",
            "defaultValue": "default",
            "bindable": true
        }
    ]
});
