xds.component.Registry.addDefinition({
    "type": "Ext.data.Batch",
    "className": "Ext.data.Batch",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyBatch",
    "cfgs": [
        {
            "name": "pauseOnException",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "complete",
            "params": [
                {
                    "name": "batch",
                    "type": "Ext.data.Batch",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Object",
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
            "name": "exception",
            "params": [
                {
                    "name": "batch",
                    "type": "Ext.data.Batch",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Object",
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
            "name": "operationcomplete",
            "params": [
                {
                    "name": "batch",
                    "type": "Ext.data.Batch",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Object",
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
