xds.component.Registry.addDefinition({
    "type": "Ext.Config",
    "className": "Ext.Config",
    "autoName": "MyConfig",
    "cfgs": [
        {
            "name": "merge",
            "type": "function",
            "params": [
                {
                    "name": "newValue",
                    "type": "Mixed"
                },
                {
                    "name": "oldValue",
                    "type": "Mixed"
                },
                {
                    "name": "target",
                    "type": "Mixed"
                },
                {
                    "name": "mixinClass",
                    "type": "Ext.Class"
                }
            ]
        }
    ]
});
