xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Cell",
    "className": "Ext.grid.cell.Cell",
    "classAlias": "widget.gridcell",
    "inherits": "Ext.grid.cell.Text",
    "autoName": "MyCell",
    "cfgs": [
        {
            "name": "formatter",
            "type": "string",
            "bindable": true
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "dataIndex",
                    "type": "Number"
                },
                {
                    "name": "cell",
                    "type": "Ext.grid.cell.Base"
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "template",
            "bindable": true
        }
    ]
});
