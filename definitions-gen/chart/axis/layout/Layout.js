xds.component.Registry.addDefinition({
    "type": "Ext.chart.axis.layout.Layout",
    "className": "Ext.chart.axis.layout.Layout",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyLayout",
    "cfgs": [
        {
            "name": "axis",
            "type": "object",
            "bindable": true
        }
    ]
});
