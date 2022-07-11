xds.component.Registry.addDefinition({
    "type": "Ext.pivot.update.Base",
    "className": "Ext.pivot.update.Base",
    "classAlias": "pivotupdate.base",
    "inherits": "Ext.mixin.Observable",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "dataIndex",
            "type": "string",
            "bindable": true
        },
        {
            "name": "leftKey",
            "type": "string",
            "bindable": true
        },
        {
            "name": "matrix",
            "type": "object",
            "bindable": true
        },
        {
            "name": "topKey",
            "type": "string",
            "bindable": true
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeupdate",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "update",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
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
