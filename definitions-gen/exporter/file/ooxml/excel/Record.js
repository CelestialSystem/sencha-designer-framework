xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Record",
    "className": "Ext.exporter.file.ooxml.excel.Record",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyRecord",
    "cfgs": [
        {
            "name": "items",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "date"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        }
    ]
});
