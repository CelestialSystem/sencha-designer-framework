xds.component.Registry.addDefinition({
    "type": "Ext.direct.Provider",
    "className": "Ext.direct.Provider",
    "classAlias": "direct.provider",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyProvider",
    "cfgs": [
        {
            "name": "headers",
            "type": "object",
            "bindable": true
        },
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "relayedEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "connect",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.Provider",
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
            "name": "data",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.Provider",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.direct.Event",
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
            "name": "disconnect",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.Provider",
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
                    "name": "provider",
                    "type": "Ext.direct.Provider",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.direct.Event",
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
