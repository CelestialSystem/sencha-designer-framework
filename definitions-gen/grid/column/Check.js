xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Check",
    "className": "Ext.grid.column.Check",
    "classAlias": "widget.checkcolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyCheck",
    "typeAlias": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
    ],
    "cfgs": [
        {
            "name": "align",
            "type": "object",
            "defaultValue": "center",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "checkedTooltip",
            "type": "string"
        },
        {
            "name": "headerCheckbox",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "invert",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stopSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "tooltip",
            "type": "string"
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "defaultValue": "click"
        }
    ],
    "eventDefs": [
        {
            "name": "beforecheckchange",
            "params": [
                {
                    "name": "checkcolumn",
                    "type": "Ext.grid.column.Check",
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
            "name": "beforeheadercheckchange",
            "params": [
                {
                    "name": "checkcolumn",
                    "type": "Ext.grid.column.Check",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
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
                    "name": "checkcolumn",
                    "type": "Ext.grid.column.Check",
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
            "name": "headercheckchange",
            "params": [
                {
                    "name": "checkcolumn",
                    "type": "Ext.grid.column.Check",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
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
