xds.component.Registry.addDefinition({
    "type": "Ext.grid.Row",
    "className": "Ext.grid.Row",
    "classAlias": "widget.gridrow",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Queryable",
        "Ext.dataview.GenericItem",
        "Ext.dataview.Pinnable"
    ],
    "autoName": "MyRow",
    "cfgs": [
        {
            "name": "body",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultCellUI",
            "type": "string",
            "bindable": true
        },
        {
            "name": "expandedField",
            "type": "string",
            "bindable": true
        }
    ]
});
