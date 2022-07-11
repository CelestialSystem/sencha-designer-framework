xds.component.Registry.addDefinition({
    "type": "Ext.d3.hierarchy.Hierarchy",
    "className": "Ext.d3.hierarchy.Hierarchy",
    "inherits": "Ext.d3.svg.Svg",
    "mixin": [
        "Ext.d3.mixin.ToolTip"
    ],
    "autoName": "MyHierarchy",
    "cfgs": [
        {
            "name": "colorAxis",
            "type": "object",
            "defaultValue": {
                "scale": {
                    "type": "ordinal",
                    "range": "d3.schemeCategory20c.slice(0, -4)"
                },
                "field": "name"
            },
            "bindable": true
        },
        {
            "name": "expandEventName",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "dblclick",
            "bindable": true
        },
        {
            "name": "hierarchyCls",
            "type": "string",
            "defaultValue": "hierarchy",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "function",
            "bindable": true
        },
        {
            "name": "linkKey",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "link",
                    "type": "Object"
                },
                {
                    "name": "index",
                    "type": "Number"
                }
            ]
        },
        {
            "name": "nodeChildren",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "record",
                    "type": "Ext.data.TreeModel"
                }
            ]
        },
        {
            "name": "nodeClass",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "selection",
                    "type": "d3.selection"
                }
            ]
        },
        {
            "name": "nodeKey",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "node",
                    "type": "d3.hierarchy"
                },
                {
                    "name": "index",
                    "type": "Number"
                }
            ]
        },
        {
            "name": "nodeText",
            "type": "function",
            "defaultValue": [
                "name",
                "text"
            ],
            "bindable": true,
            "params": [
                {
                    "name": "component",
                    "type": "Ext.d3.hierarchy.Hierarchy"
                },
                {
                    "name": "node",
                    "type": "d3.hierarchy"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "nodeValue",
            "type": "function",
            "defaultValue": 1,
            "bindable": true,
            "params": [
                {
                    "name": "record",
                    "type": "Ext.data.TreeModel"
                }
            ],
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
            "name": "noParentValue",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": "selection",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "rootVisible",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "selectEventName",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "click",
            "bindable": true
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "transitions",
            "type": "object",
            "defaultValue": {
                "layout": {
                    "duration": 500,
                    "ease": "cubicInOut"
                },
                "select": {
                    "duration": 150,
                    "ease": "cubicInOut",
                    "sourceScale": 1,
                    "targetScale": 1.07
                }
            },
            "bindable": true
        }
    ]
});
