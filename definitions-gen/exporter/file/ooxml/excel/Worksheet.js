xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Worksheet",
    "className": "Ext.exporter.file.ooxml.excel.Worksheet",
    "inherits": "Ext.exporter.file.ooxml.excel.Sheet",
    "autoName": "MyWorksheet",
    "cfgs": [
        {
            "name": "bottomRightRef",
            "type": "object",
            "bindable": true
        },
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "rows",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "topLeftRef",
            "type": "object",
            "bindable": true
        }
    ]
});
