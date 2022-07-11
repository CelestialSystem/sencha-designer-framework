xds.component.Registry.addDefinition({
    "type": "Ext.chart.AbstractChart",
    "className": "Ext.chart.AbstractChart",
    "inherits": "Ext.draw.Container",
    "autoName": "MyAbstractChart",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "axes",
            "type": "object",
            "defaultValue": [],
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "background",
            "type": "object",
            "bindable": true
        },
        {
            "name": "captions",
            "type": "object",
            "bindable": true
        },
        {
            "name": "colors",
            "type": "array",
            "bindable": true
        },
        {
            "name": "highlightItem",
            "type": "object",
            "bindable": true
        },
        {
            "name": "insetPadding",
            "type": "object",
            "defaultValue": {
                "top": 10,
                "left": 10,
                "right": 10,
                "bottom": 10
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "interactions",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "legend",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "series",
            "type": "object",
            "defaultValue": [],
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "store",
            "type": "object",
            "defaultValue": "ext-empty-store",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        },
        {
            "name": "theme",
            "type": "string",
            "defaultValue": "default",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforerefresh",
            "params": [
                {
                    "name": "abstractchart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
            "name": "itemhighlight",
            "params": [
                {
                    "name": "abstractchart",
                    "type": "Ext.chart.AbstractChart",
                    "optional": true
                },
                {
                    "name": "newItem",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldItem",
                    "type": "Object",
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
            "name": "itemhighlightchange",
            "params": [
                {
                    "name": "me",
                    "optional": true
                },
                {
                    "name": "newItem",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldItem",
                    "type": "Object",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
            "name": "redraw",
            "params": [
                {
                    "name": "abstractchart",
                    "type": "Ext.chart.AbstractChart",
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
            "name": "refresh",
            "params": [
                {
                    "name": "abstractchart",
                    "type": "Ext.chart.AbstractChart",
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
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
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
