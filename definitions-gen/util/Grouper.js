xds.component.Registry.addDefinition({
    "type": "Ext.util.Grouper",
    "className": "Ext.util.Grouper",
    "inherits": "Ext.util.Sorter",
    "autoName": "MyGrouper",
    "cfgs": [
        {
            "name": "groupFn",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "item",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "property",
            "type": "string",
            "bindable": true
        },
        {
            "name": "sortProperty",
            "type": "string",
            "bindable": true
        }
    ]
});
