xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.PivotTableStyleInfo",
    "className": "Ext.exporter.file.ooxml.excel.PivotTableStyleInfo",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyPivotTableStyleInfo",
    "cfgs": [
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "name",
            "type": "string",
            "defaultValue": "PivotStyleLight2",
            "bindable": true
        },
        {
            "name": "showColHeaders",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showColStripes",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "showLastColumn",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showRowHeaders",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showRowStripes",
            "type": "boolean",
            "bindable": true
        }
    ]
});
