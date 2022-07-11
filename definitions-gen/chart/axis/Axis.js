xds.component.Registry.addDefinition({
    "type": "Ext.chart.axis.Axis",
    "className": "Ext.chart.axis.Axis",
    "autoName": "MyAxis",
    "cfgs": [
        {
            "name": "adjustByMajorUnit",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "background",
            "type": "object",
            "bindable": true
        },
        {
            "name": "chart",
            "type": "object",
            "bindable": true
        },
        {
            "name": "fields",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "floating",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "grid",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "label",
            "type": "object",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": "continuous",
            "bindable": true
        },
        {
            "name": "limits",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "linkedTo",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "majorTickSteps",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "margin",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "maximum",
            "type": "number",
            "defaultValue": null,
            "bindable": true
        },
        {
            "name": "maxZoom",
            "type": "number",
            "defaultValue": 10000,
            "bindable": true
        },
        {
            "name": "minimum",
            "type": "number",
            "defaultValue": null,
            "bindable": true
        },
        {
            "name": "minorTickSteps",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "minZoom",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "needHighPrecision",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "position",
            "type": "string",
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "reconcileRange",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "axis",
                    "type": "Ext.chart.axis.Axis"
                },
                {
                    "name": "label",
                    "type": "String/Number"
                },
                {
                    "name": "layoutContext",
                    "type": "Object"
                },
                {
                    "name": "lastLabel",
                    "type": "String/Number/null"
                }
            ]
        },
        {
            "name": "segmenter",
            "type": "object",
            "defaultValue": "numeric",
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "titleMargin",
            "type": "number",
            "defaultValue": 4,
            "bindable": true
        },
        {
            "name": "visibleRange",
            "type": "array",
            "defaultValue": [
                0,
                1
            ],
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "rangechange",
            "params": [
                {
                    "name": "axis",
                    "type": "Ext.chart.axis.Axis",
                    "optional": true
                },
                {
                    "name": "range",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "oldRange",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "visiblerangechange",
            "params": [
                {
                    "name": "axis",
                    "type": "Ext.chart.axis.Axis",
                    "optional": true
                },
                {
                    "name": "visibleRange",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
