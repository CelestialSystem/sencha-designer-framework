xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Widget",
    "className": "Ext.grid.column.Widget",
    "classAlias": "widget.widgetcolumn",
    "inherits": "Ext.grid.column.Column",
    "mixin": [
        "Ext.mixin.StyleCacher"
    ],
    "autoName": "MyWidget",
    "cfgs": [
        {
            "name": "defaultWidgetUI",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "onWidgetAttach",
            "type": "function",
            "params": [
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column"
                },
                {
                    "name": "widget",
                    "type": "Ext.Component/Ext.Widget"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "renderer",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "scope",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stopSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "widget",
            "type": "object"
        }
    ]
});
