xds.component.Registry.addDefinition({
    "type": "Ext.util.AbstractMixedCollection",
    "className": "Ext.util.AbstractMixedCollection",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyAbstractMixedCollection",
    "cfgs": [
        {
            "name": "allowFunctions",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "add",
            "params": [
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "o",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
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
                    "name": "o",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
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
                    "name": "key",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "old",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "new",
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
