xds.component.Registry.addDefinition({
    "type": "Ext.view.Table",
    "className": "Ext.view.Table",
    "classAlias": "widget.tableview",
    "inherits": "Ext.view.View",
    "mixin": [
        "Ext.mixin.Queryable"
    ],
    "autoName": "MyTable",
    "typeAlias": [
        "Ext.grid.View"
    ],
    "cfgs": [
        {
            "name": "enableTextSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "firstCls",
            "type": "string",
            "defaultValue": "x-grid-cell-first"
        },
        {
            "name": "lastCls",
            "type": "string",
            "defaultValue": "x-grid-cell-last"
        },
        {
            "name": "markDirty",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stripeRows",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforecellclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforecellcontextmenu",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforecelldblclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforecellkeydown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforecellmousedown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforecellmouseup",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodyclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodycontextmenu",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodydblclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodykeydown",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodykeypress",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodykeyup",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodylongpress",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodymousedown",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowbodymouseup",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "beforerowexit",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "keyEvent",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "prevRow",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "nextRow",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "forward",
                    "type": "Boolean",
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
            "name": "cellclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "cellcontextmenu",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "celldblclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "cellkeydown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "cellmousedown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "cellmouseup",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "td",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "cellIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodyclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodycontextmenu",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodydblclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodykeydown",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodykeypress",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodykeyup",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodylongpress",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodymousedown",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowbodymouseup",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "rowBodyEl",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "element",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowcontextmenu",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowdblclick",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "element",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowkeydown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "element",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowmousedown",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "tr",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "rowmouseup",
            "params": [
                {
                    "name": "tableview",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "element",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
