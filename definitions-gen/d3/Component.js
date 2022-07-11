xds.component.Registry.addDefinition({
    "type": "Ext.d3.Component",
    "className": "Ext.d3.Component",
    "inherits": "Ext.d3.ComponentBase",
    "autoName": "MyComponent",
    "cfgs": [
        {
            "name": "componentCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "interactions",
            "type": "object",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "transitions",
            "type": "object",
            "defaultValue": {
                "none": {
                    "duration": 0
                }
            },
            "bindable": true
        }
    ]
});
