xds.component.Registry.addDefinition({
    "type": "Ext.list.Tree",
    "className": "Ext.list.Tree",
    "classAlias": "widget.treelist",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.mixin.ItemRippler"
    ],
    "autoName": "MyTree",
    "cfgs": [
        {
            "name": "defaults",
            "type": "object",
            "defaultValue": {
                "xtype": "treelistitem"
            },
            "bindable": true
        },
        {
            "name": "expanderFirst",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "expanderOnly",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "floatLeafItems",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "highlightPath",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "micro",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "selection",
            "type": "object",
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
            "name": "selectOnExpander",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "singleExpand",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "store",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "ui",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "itemclick",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.list.Tree",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "selectionchange",
            "params": [
                {
                    "name": "treelist",
                    "type": "Ext.list.Tree",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.TreeModel",
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
