xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Check",
    "className": "Ext.grid.column.Check",
    "classAlias": "widget.checkcolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyCheck",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "cell",
            "type": "object",
            "defaultValue": {
                "xtype": "checkcell"
            },
            "bindable": true
        },
        {
            "name": "headerCheckbox",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "headerCheckboxAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "stopSelection",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforecheckchange",
            "params": [
                {
                    "name": "checkcell",
                    "type": "Ext.grid.cell.Check",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
            "name": "checkchange",
            "params": [
                {
                    "name": "checkcell",
                    "type": "Ext.grid.cell.Check",
                    "optional": true
                },
                {
                    "name": "rowIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
