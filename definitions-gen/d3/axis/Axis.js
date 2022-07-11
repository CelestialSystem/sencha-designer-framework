xds.component.Registry.addDefinition({
    "type": "Ext.d3.axis.Axis",
    "className": "Ext.d3.axis.Axis",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.d3.mixin.Detached"
    ],
    "autoName": "MyAxis",
    "cfgs": [
        {
            "name": "axis",
            "type": "object",
            "defaultValue": {
                "orient": "top"
            },
            "bindable": true
        },
        {
            "name": "component",
            "type": "object",
            "bindable": true
        },
        {
            "name": "parent",
            "type": "object",
            "bindable": true
        },
        {
            "name": "scale",
            "type": "object",
            "defaultValue": {
                "type": "linear"
            },
            "bindable": true
        },
        {
            "name": "title",
            "type": "object",
            "bindable": true
        }
    ]
});
