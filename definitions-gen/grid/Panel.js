xds.component.Registry.addDefinition({
    "type": "Ext.grid.Panel",
    "className": "Ext.grid.Panel",
    "classAlias": "widget.gridpanel",
    "inherits": "Ext.panel.Table",
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
    ],
    "cfgs": [
        {
            "name": "columns",
            "type": "object"
        },
        {
            "name": "rowLines",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "viewType",
            "type": "string",
            "defaultValue": "tableview"
        }
    ],
    "eventDefs": [
        {
            "name": "beforereconfigure",
            "params": [
                {
                    "name": "gridpanel",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "columns",
                    "type": "Object[]",
                    "optional": true
                },
                {
                    "name": "oldStore",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "oldColumns",
                    "type": "Ext.grid.column.Column[]",
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
            "name": "reconfigure",
            "params": [
                {
                    "name": "gridpanel",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "columns",
                    "type": "Object[]",
                    "optional": true
                },
                {
                    "name": "oldStore",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "oldColumns",
                    "type": "Ext.grid.column.Column[]",
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
