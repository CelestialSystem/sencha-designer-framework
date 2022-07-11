xds.component.Registry.addDefinition({
    "type": "Ext.d3.axis.Data",
    "className": "Ext.d3.axis.Data",
    "inherits": "Ext.d3.axis.Axis",
    "autoName": "MyData",
    "cfgs": [
        {
            "name": "field",
            "type": "string",
            "bindable": true
        },
        {
            "name": "step",
            "type": "number",
            "bindable": true
        }
    ]
});
