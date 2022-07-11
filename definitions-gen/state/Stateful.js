xds.component.Registry.addDefinition({
    "type": "Ext.state.Stateful",
    "className": "Ext.state.Stateful",
    "inherits": "Ext.Base",
    "autoName": "MyStateful",
    "cfgs": [
        {
            "name": "saveDelay",
            "type": "number",
            "defaultValue": 100
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "stateful",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "stateId",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforestaterestore",
            "params": [
                {
                    "name": "stateful",
                    "type": "Ext.state.Stateful",
                    "optional": true
                },
                {
                    "name": "state",
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
            "name": "beforestatesave",
            "params": [
                {
                    "name": "stateful",
                    "type": "Ext.state.Stateful",
                    "optional": true
                },
                {
                    "name": "state",
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
            "name": "staterestore",
            "params": [
                {
                    "name": "stateful",
                    "type": "Ext.state.Stateful",
                    "optional": true
                },
                {
                    "name": "state",
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
            "name": "statesave",
            "params": [
                {
                    "name": "stateful",
                    "type": "Ext.state.Stateful",
                    "optional": true
                },
                {
                    "name": "state",
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
