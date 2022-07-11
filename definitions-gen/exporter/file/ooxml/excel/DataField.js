xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.DataField",
    "className": "Ext.exporter.file.ooxml.excel.DataField",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyDataField",
    "cfgs": [
        {
            "name": "baseField",
            "type": "number",
            "bindable": true
        },
        {
            "name": "baseItem",
            "type": "number"
        },
        {
            "name": "fld",
            "type": "number",
            "bindable": true
        },
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "numFmtId",
            "type": "number",
            "bindable": true
        },
        {
            "name": "showDataAs",
            "type": "string",
            "bindable": true
        },
        {
            "name": "subtotal",
            "type": "string",
            "bindable": true
        }
    ]
});
