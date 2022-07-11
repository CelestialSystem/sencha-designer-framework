xds.component.Registry.addDefinition({
    "type": "Ext.grid.Grid",
    "className": "Ext.grid.Grid",
    "classAlias": "widget.grid",
    "inherits": "Ext.dataview.List",
    "mixin": [
        "Ext.mixin.ConfigProxy"
    ],
    "autoName": "MyGrid",
    "cfgs": [
        {
            "name": "columnLines",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "columnMenu",
            "type": "object",
            "defaultValue": {
                "xtype": "menu",
                "weighted": true,
                "align": "tl-bl?",
                "hideOnParentHide": false,
                "items": {
                    "sortAsc": {
                        "xtype": "gridsortascmenuitem",
                        "group": "sortDir",
                        "weight": -100
                    },
                    "sortDesc": {
                        "xtype": "gridsortdescmenuitem",
                        "group": "sortDir",
                        "weight": -90
                    },
                    "groupByThis": {
                        "xtype": "gridgroupbythismenuitem",
                        "handler": "column.onGroupByThis",
                        "separator": true,
                        "weight": -50
                    },
                    "showInGroups": {
                        "xtype": "gridshowingroupsmenuitem",
                        "handler": "column.onToggleShowInGroups",
                        "weight": -40
                    }
                }
            },
            "bindable": true
        },
        {
            "name": "columnResize",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "columnsMenuItem",
            "type": "object",
            "defaultValue": {
                "xtype": "gridcolumnsmenu",
                "weight": -80,
                "separator": true
            },
            "bindable": true
        },
        {
            "name": "groupHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "rowheader"
            },
            "bindable": true
        },
        {
            "name": "hideHeaders",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "infinite",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "itemConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "gridrow"
            },
            "bindable": true
        },
        {
            "name": "itemsFocusable",
            "type": "object",
            "defaultValue": false,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "multiColumnSort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "pinnedHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "rowheader"
            },
            "bindable": true
        },
        {
            "name": "reserveScrollbar",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "rowNumbers",
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
            "name": "scrollable",
            "type": "boolean",
            "defaultValue": true,
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
            "name": "scrollToTopOnRefresh",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "selectable",
            "type": "object",
            "bindable": true
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "striped",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "titleBar",
            "type": "object",
            "defaultValue": {
                "xtype": "titlebar",
                "docked": "top"
            },
            "bindable": true
        },
        {
            "name": "enableColumnMove",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeselectionextend",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "An",
                    "type": "Ext.dataview.selection.Selection",
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
            "name": "cellselection",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "selection",
                    "type": "Ext.grid.selection.Rows",
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
            "name": "columnadd",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "columnhide",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
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
            "name": "columnmenucreated",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.Column",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
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
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
                    "optional": true
                },
                {
                    "name": "fromIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "toIndex",
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
            "name": "columnremove",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
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
            "name": "columnresize",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
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
            "name": "columnselection",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "selection",
                    "type": "Ext.grid.selection.Columns",
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
                    "name": "grid",
                    "type": "Ext.grid.Grid",
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
            "name": "columnsort",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
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
            "name": "selectionextenderdrag",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Grid",
                    "optional": true
                },
                {
                    "name": "An",
                    "type": "Ext.dataview.selection.Selection",
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
        }
    ]
});
