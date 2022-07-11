xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.RowOperations",
    "className": "Ext.grid.plugin.RowOperations",
    "classAlias": "plugin.rowoperations",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyRowOperations",
    "typeAlias": [
        "Ext.grid.plugin.MultiSelection"
    ],
    "cfgs": [
        {
            "name": "cancelText",
            "type": "string",
            "defaultValue": "Done",
            "bindable": true
        },
        {
            "name": "deleteText",
            "type": "string",
            "defaultValue": "Delete",
            "bindable": true
        },
        {
            "name": "disableSelection",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "operation",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "ui": "alt decline",
                "align": "right",
                "handler": "me.onOperationTap",
                "margin": "0 0 0 10"
            },
            "bindable": true
        },
        {
            "name": "selectButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "ui": "alt",
                "align": "right",
                "margin": "0 0 0 10"
            },
            "bindable": true
        },
        {
            "name": "selectionColumn",
            "type": "object",
            "defaultValue": {
                "sortable": false
            },
            "bindable": true
        },
        {
            "name": "triggerText",
            "type": "string",
            "defaultValue": "Select",
            "bindable": true
        },
        {
            "name": "useTriggerButton",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
