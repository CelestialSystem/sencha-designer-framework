xds.component.Registry.addDefinition({
    "type": "Ext.d3.interaction.Abstract",
    "className": "Ext.d3.interaction.Abstract",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyAbstract",
    "cfgs": [
        {
            "name": "component",
            "type": "object",
            "bindable": true
        },
        {
            "name": "enabled",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "gestures",
            "type": "object",
            "bindable": true
        }
    ]
});
