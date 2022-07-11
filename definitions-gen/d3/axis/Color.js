xds.component.Registry.addDefinition({
    "type": "Ext.d3.axis.Color",
    "className": "Ext.d3.axis.Color",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyColor",
    "cfgs": [
        {
            "name": "field",
            "type": "string",
            "bindable": true
        },
        {
            "name": "maximum",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minimum",
            "type": "number",
            "bindable": true
        },
        {
            "name": "processor",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "axis",
                    "type": "Ext.d3.axis.Color"
                },
                {
                    "name": "scale",
                    "type": "Function"
                },
                {
                    "name": "value",
                    "type": "*"
                },
                {
                    "name": "field",
                    "type": "String"
                }
            ]
        },
        {
            "name": "scale",
            "type": "function",
            "defaultValue": {
                "type": "linear",
                "range": [
                    "white",
                    "maroon"
                ]
            },
            "bindable": true,
            "params": [
                {
                    "name": "domain",
                    "type": "Array"
                }
            ]
        }
    ]
});
