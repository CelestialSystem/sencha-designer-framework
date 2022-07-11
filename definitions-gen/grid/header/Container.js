xds.component.Registry.addDefinition({
    "type": "Ext.grid.header.Container",
    "className": "Ext.grid.header.Container",
    "classAlias": "widget.headercontainer",
    "inherits": "Ext.container.Container",
    "autoName": "MyContainer",
    "cfgs": [
        {
            "name": "columnsText",
            "type": "string",
            "defaultValue": "Columns"
        },
        {
            "name": "defaultWidth",
            "type": "number",
            "defaultValue": 100
        },
        {
            "name": "enableColumnHide",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "sealed",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "sortAscText",
            "type": "string",
            "defaultValue": "Sort Ascending"
        },
        {
            "name": "sortClearText",
            "type": "string",
            "defaultValue": "Clear Sort"
        },
        {
            "name": "sortDescText",
            "type": "string",
            "defaultValue": "Sort Descending"
        },
        {
            "name": "weight",
            "type": "number",
            "defaultValue": 100
        }
    ],
    "eventDefs": [
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
            "name": "menucreate",
            "params": [
                {
                    "name": "ct",
                    "type": "Ext.grid.header.Container",
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
        }
    ]
});
