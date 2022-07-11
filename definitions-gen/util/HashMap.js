xds.component.Registry.addDefinition({
    "type": "Ext.util.HashMap",
    "className": "Ext.util.HashMap",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyHashMap",
    "cfgs": [
        {
            "name": "keyFn",
            "type": "function",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "add",
            "params": [
                {
                    "name": "hashmap",
                    "type": "Ext.util.HashMap",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
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
            "name": "clear",
            "params": [
                {
                    "name": "hashmap",
                    "type": "Ext.util.HashMap",
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
            "name": "remove",
            "params": [
                {
                    "name": "hashmap",
                    "type": "Ext.util.HashMap",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
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
            "name": "replace",
            "params": [
                {
                    "name": "hashmap",
                    "type": "Ext.util.HashMap",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "old",
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
