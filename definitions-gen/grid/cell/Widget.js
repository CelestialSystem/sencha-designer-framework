xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Widget",
    "className": "Ext.grid.cell.Widget",
    "classAlias": "widget.widgetcell",
    "inherits": "Ext.grid.cell.Base",
    "autoName": "MyWidget",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "forceWidth",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "selectable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "widget",
            "type": "object",
            "bindable": true
        }
    ]
});
