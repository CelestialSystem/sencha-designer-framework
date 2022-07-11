xds.component.Registry.addDefinition({
    "type": "Ext.util.Sorter",
    "className": "Ext.util.Sorter",
    "inherits": "Ext.Base",
    "autoName": "MySorter",
    "cfgs": [
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "ASC",
            "bindable": true
        },
        {
            "name": "id",
            "type": "object",
            "bindable": true
        },
        {
            "name": "property",
            "type": "string",
            "bindable": true
        },
        {
            "name": "root",
            "type": "string",
            "bindable": true
        },
        {
            "name": "sorterFn",
            "type": "function",
            "bindable": true
        },
        {
            "name": "transform",
            "type": "function",
            "bindable": true
        }
    ]
});
