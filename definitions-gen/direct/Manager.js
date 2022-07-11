xds.component.Registry.addDefinition({
    "type": "Ext.direct.Manager",
    "className": "Ext.direct.Manager",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyManager",
    "typeAlias": [
        "Ext.Direct"
    ],
    "cfgs": [
        {
            "name": "varName",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "event",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.direct.Event",
                    "optional": true
                },
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
                    "name": "event",
                    "type": "Ext.direct.Event",
                    "optional": true
                },
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
            "name": "providerload",
            "params": [
                {
                    "name": "url",
                    "type": "String",
                    "optional": true
                },
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
            "name": "providerloaderror",
            "params": [
                {
                    "name": "url",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "error",
                    "type": "String",
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
