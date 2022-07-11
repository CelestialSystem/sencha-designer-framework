xds.component.Registry.addDefinition({
    "type": "Ext.panel.Table",
    "className": "Ext.panel.Table",
    "classAlias": "widget.tablepanel",
    "inherits": "Ext.panel.Panel",
    "mixin": [
        "Ext.grid.locking.Lockable"
    ],
    "autoName": "MyTable",
    "cfgs": [
        {
            "name": "allowDeselect",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "autoLoad",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "bufferedRenderer",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "columnLines",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "columns",
            "type": "object"
        },
        {
            "name": "deferRowRender",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "disableSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "emptyText",
            "type": "string"
        },
        {
            "name": "enableColumnHide",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableColumnMove",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableColumnResize",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableLocking",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "features",
            "type": "array"
        },
        {
            "name": "focused",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "forceFit",
            "type": "boolean"
        },
        {
            "name": "headerBorders",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "hideHeaders",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "fit",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "leadingBufferZone",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "multiColumnSort",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "numFromEdge",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "preciseHeight",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "reserveScrollbar",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "rowLines",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "rowViewModel",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "sealedColumns",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selModel",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "sortableColumns",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "trailingBufferZone",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "view",
            "type": "object"
        },
        {
            "name": "viewConfig",
            "type": "object"
        },
        {
            "name": "viewType",
            "type": "string"
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
            "name": "beforecontainerclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainercontextmenu",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainerdblclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainerkeydown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainerkeypress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainerkeyup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainermousedown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainermouseout",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainermouseover",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforecontainermouseup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "beforedeselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
            "name": "beforeitemclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemcontextmenu",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemdblclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemkeydown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemkeypress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemkeyup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemlongpress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemmousedown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemmouseenter",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemmouseleave",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeitemmouseup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
            "name": "beforeselectionextend",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.panel.Table",
                    "optional": true
                },
                {
                    "name": "An",
                    "type": "Ext.grid.selection.Selection",
                    "optional": true
                },
                {
                    "name": "extension",
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
            "name": "columnhide",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "columnmove",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "fromIdx",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "toIdx",
                    "type": "Number",
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
            "name": "columnresize",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
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
            "name": "columnschanged",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
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
            "name": "columnshow",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "containerclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containercontextmenu",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containerdblclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containerkeydown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containerkeypress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containerkeyup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containermousedown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containermouseout",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containermouseover",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "containermouseup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "deselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
            "name": "filteractivate",
            "params": [
                {
                    "name": "filters",
                    "type": "Ext.grid.filters.Filters",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "filterchange",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "filters",
                    "type": "Ext.util.Filter[]",
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
            "name": "filterdeactivate",
            "params": [
                {
                    "name": "filters",
                    "type": "Ext.grid.filters.Filters",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "groupchange",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "grouper",
                    "type": "Ext.util.Grouper",
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
            "name": "headerclick",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
                    "type": "HTMLElement",
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
            "name": "headercontextmenu",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
                    "type": "HTMLElement",
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
            "name": "headermenucreate",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.panel.Table",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "headerCt",
                    "type": "Ext.grid.header.Container",
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
            "name": "headertriggerclick",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
                    "type": "HTMLElement",
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
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemcontextmenu",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemdblclick",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemkeydown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemkeypress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemkeyup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemlongpress",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemmousedown",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemmouseenter",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemmouseleave",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "itemmouseup",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "index",
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
        },
        {
            "name": "select",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
                    "name": "model",
                    "type": "Ext.selection.Model",
                    "optional": true
                },
                {
                    "name": "selected",
                    "type": "Ext.data.Model[]",
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
            "name": "selectionextenderdrag",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.panel.Table",
                    "optional": true
                },
                {
                    "name": "An",
                    "type": "Ext.grid.selection.Selection",
                    "optional": true
                },
                {
                    "name": "extension",
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
            "name": "sortchange",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "direction",
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
            "name": "viewready",
            "params": [
                {
                    "name": "tablepanel",
                    "type": "Ext.panel.Table",
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
