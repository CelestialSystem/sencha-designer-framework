xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.CacheSource",
    "className": "Ext.exporter.file.ooxml.excel.CacheSource",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyCacheSource",
    "cfgs": [
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "type",
            "type": "string",
            "defaultValue": "worksheet",
            "bindable": true
        },
        {
            "name": "worksheetSource",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        }
    ]
});
