xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Series",
    "className": "Ext.chart.series.Series",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Bindable"
    ],
    "autoName": "MySeries",
    "cfgs": [
        {
            "name": "animation",
            "type": "object",
            "bindable": true
        },
        {
            "name": "background",
            "type": "object",
            "bindable": true
        },
        {
            "name": "colors",
            "type": "array",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "highlight",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "highlightCfg",
            "type": "object",
            "defaultValue": {
                "fillStyle": "yellow",
                "strokeStyle": "red"
            },
            "bindable": true
        },
        {
            "name": "itemInstancing",
            "type": "object",
            "bindable": true
        },
        {
            "name": "label",
            "type": "object",
            "bindable": true
        },
        {
            "name": "labelOverflowPadding",
            "type": "number",
            "bindable": true
        },
        {
            "name": "marker",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "markerSubStyle",
            "type": "object",
            "bindable": true
        },
        {
            "name": "overlaySurface",
            "type": "object",
            "bindable": true
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "sprite",
                    "type": "Object"
                },
                {
                    "name": "config",
                    "type": "Object"
                },
                {
                    "name": "rendererData",
                    "type": "Object"
                },
                {
                    "name": "index",
                    "type": "Number"
                }
            ]
        },
        {
            "name": "showInLegend",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showMarkers",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "subStyle",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "surface",
            "type": "object",
            "bindable": true
        },
        {
            "name": "title",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "tooltip",
            "type": "object",
            "bindable": true
        },
        {
            "name": "useDarkerStrokeColor",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "chartattached",
            "params": [
                {
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
                    "optional": true
                },
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
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
            "name": "chartdetached",
            "params": [
                {
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
                    "optional": true
                },
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
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
            "name": "itemclick",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemdblclick",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemmousedown",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemmousemove",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemmouseout",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemmouseover",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemmouseup",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "itemtap",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "storechange",
            "params": [
                {
                    "name": "series",
                    "type": "Ext.chart.series.Series",
                    "optional": true
                },
                {
                    "name": "newStore",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "oldStore",
                    "type": "Ext.data.Store",
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
