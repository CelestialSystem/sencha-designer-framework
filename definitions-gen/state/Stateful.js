xds.component.Registry.addDefinition({
    "type": "Ext.state.Stateful",
    "className": "Ext.state.Stateful",
    "inherits": "Ext.Mixin",
    "autoName": "MyStateful",
    "cfgs": [
        {
            "name": "stateful",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "statefulDefaults",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "stateId",
            "type": "string",
            "bindable": true
        }
    ]
});
