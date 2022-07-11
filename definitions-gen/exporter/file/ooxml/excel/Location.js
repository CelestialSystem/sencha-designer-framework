xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Location",
    "className": "Ext.exporter.file.ooxml.excel.Location",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyLocation",
    "cfgs": [
        {
            "name": "colPageCount",
            "type": "number",
            "bindable": true
        },
        {
            "name": "firstDataCol",
            "type": "number",
            "bindable": true
        },
        {
            "name": "firstDataRow",
            "type": "number",
            "bindable": true
        },
        {
            "name": "firstHeaderRow",
            "type": "number",
            "bindable": true
        },
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "ref",
            "type": "string",
            "bindable": true
        },
        {
            "name": "rowPageCount",
            "type": "number",
            "bindable": true
        }
    ]
});
