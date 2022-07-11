xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Dirty",
    "className": "Ext.mixin.Dirty",
    "inherits": "Ext.Base",
    "autoName": "MyDirty",
    "cfgs": [
        {
            "name": "dirty",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "ignoreDirty",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "recordStateIsDirtyState",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "dirtychange",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.Base",
                    "optional": true
                },
                {
                    "name": "dirty",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
