xds.component.Registry.addDefinition({
    "type": "Ext.drag.Item",
    "className": "Ext.drag.Item",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyItem",
    "cfgs": [
        {
            "name": "autoDestroy",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "element",
            "type": "string",
            "bindable": true
        },
        {
            "name": "groups",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        }
    ]
});
