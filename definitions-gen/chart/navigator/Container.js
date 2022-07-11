xds.component.Registry.addDefinition({
    "type": "Ext.chart.navigator.Container",
    "className": "Ext.chart.navigator.Container",
    "classAlias": "widget.chartnavigator",
    "inherits": "Ext.chart.navigator.ContainerBase",
    "autoName": "MyContainer",
    "cfgs": [
        {
            "name": "chart",
            "type": "object",
            "bindable": true
        },
        {
            "name": "navigator",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        }
    ]
});
