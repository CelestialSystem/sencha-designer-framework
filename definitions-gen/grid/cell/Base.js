xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Base",
    "className": "Ext.grid.cell.Base",
    "classAlias": "widget.gridcellbase",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.mixin.Toolable"
    ],
    "autoName": "MyBase",
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
            "bindable": true
        },
        {
            "name": "bodyCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "bodyStyle",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "cellCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "cls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "column",
            "type": "object",
            "bindable": true
        },
        {
            "name": "record",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selectable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true
        }
    ]
});
