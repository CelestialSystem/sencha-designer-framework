xds.component.Registry.addDefinition({
    "type": "Ext.dataview.List",
    "className": "Ext.dataview.List",
    "classAlias": "widget.list",
    "inherits": "Ext.dataview.Component",
    "mixin": [
        "Ext.mixin.Bufferable"
    ],
    "autoName": "MyList",
    "typeAlias": [
        "Ext.List"
    ],
    "cfgs": [
        {
            "name": "bufferSize",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        },
        {
            "name": "disclosureProperty",
            "type": "string",
            "defaultValue": "disclosure",
            "bindable": true
        },
        {
            "name": "grouped",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "groupFooter",
            "type": "object",
            "bindable": true
        },
        {
            "name": "groupHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "itemheader",
                "tpl": "{html} ({count})"
            },
            "bindable": true
        },
        {
            "name": "indexBar",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "infinite",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "itemConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "simplelistitem"
            },
            "bindable": true
        },
        {
            "name": "minimumBufferDistance",
            "type": "number",
            "defaultValue": 5,
            "bindable": true
        },
        {
            "name": "onItemDisclosure",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                },
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "pinFooters",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "pinHeaders",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "pinnedFooter",
            "type": "object",
            "bindable": true
        },
        {
            "name": "pinnedHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "itemheader"
            },
            "bindable": true
        },
        {
            "name": "preventSelectionOnDisclose",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "preventSelectionOnTool",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "rowLines",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "scrollable",
            "type": "boolean",
            "defaultValue": {
                "x": false,
                "y": true
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "variableHeights",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "collapseDefaults",
            "type": "object",
            "defaultValue": {
                "cached": true,
                "$value": {
                    "xclass": 'Ext.dataview.ListCollapser'
                }
            }
        },
        {
            "name": "collapsible",
            "type": "object",
            "defaultValue": {
                "lazy": true,
                "$value": true
            },
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "groupPlaceholder",
            "type": "object",
            "defaultValue": {
                "cached": true,
                "$value": {
                    "xtype": 'listitemplaceholder'
                }
            }
        }
    ],
    "eventDefs": [
        {
            "name": "childdoubletap",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childlongpress",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childmouseenter",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childmouseleave",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childsingletap",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtap",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtaphold",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtouchcancel",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtouchend",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtouchmove",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "childtouchstart",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.list.Location",
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
            "name": "disclose",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
            "name": "itemaction",
            "params": [
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "action",
                    "type": "String",
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
            "name": "beforegroupcollapse",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.dataview.List"
                },
                {
                    "name": "group",
                    "type": "Ext.dataview.ListGroup"
                }
            ]
        },
        {
            "name": "beforegroupexpand",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.dataview.List"
                },
                {
                    "name": "group",
                    "type": "Ext.dataview.ListGroup"
                }
            ]
        },
        {
            "name": "groupcollapse",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.dataview.List"
                },
                {
                    "name": "group",
                    "type": "Ext.dataview.ListGroup"
                }
            ]
        },
        {
            "name": "groupexpand",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.dataview.List"
                },
                {
                    "name": "group",
                    "type": "Ext.dataview.ListGroup"
                }
            ]
        }
    ]
});
