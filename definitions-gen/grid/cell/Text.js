xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Text",
    "className": "Ext.grid.cell.Text",
    "classAlias": "widget.textcell",
    "inherits": "Ext.grid.cell.Base",
    "autoName": "MyText",
    "cfgs": [
        {
            "name": "encodeHtml",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "rawValue",
            "type": "string",
            "bindable": true
        },
        {
            "name": "zeroValue",
            "type": "string",
            "bindable": true
        }
    ]
});
