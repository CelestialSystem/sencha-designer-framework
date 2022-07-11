xds.component.Registry.addDefinition({
    "type": "Ext.util.Filter",
    "className": "Ext.util.Filter",
    "inherits": "Ext.util.BasicFilter",
    "autoName": "MyFilter",
    "cfgs": [
        {
            "name": "anyMatch",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "caseSensitive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "disableOnEmpty",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "exactMatch",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "filterFn",
            "type": "function",
            "bindable": true
        },
        {
            "name": "operator",
            "type": "string",
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
            "name": "scope",
            "type": "object"
        },
        {
            "name": "value",
            "type": "regex",
            "bindable": true
        }
    ]
});
