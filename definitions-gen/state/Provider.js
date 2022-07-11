xds.component.Registry.addDefinition({
    "type": "Ext.state.Provider",
    "className": "Ext.state.Provider",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyProvider",
    "cfgs": [
        {
            "name": "prefix",
            "type": "string",
            "defaultValue": "ext-"
        }
    ],
    "eventDefs": [
        {
            "name": "statechange",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.state.Provider",
                    "optional": true
                },
                {
                    "name": "key",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
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
