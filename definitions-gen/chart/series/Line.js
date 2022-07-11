xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Line",
    "className": "Ext.chart.series.Line",
    "classAlias": "series.line",
    "inherits": "Ext.chart.series.Cartesian",
    "autoName": "MyLine",
    "cfgs": [
        {
            "name": "curve",
            "type": "object",
            "defaultValue": {
                "type": "linear"
            },
            "bindable": true
        },
        {
            "name": "fill",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "nullStyle",
            "type": "string",
            "editor": "options",
            "options": [
                "connect",
                "gap",
                "origin"
            ],
            "defaultValue": "gap",
            "bindable": true
        },
        {
            "name": "selectionTolerance",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        }
    ]
});
