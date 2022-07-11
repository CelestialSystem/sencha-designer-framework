xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.PivotCacheDefinition",
    "className": "Ext.exporter.file.ooxml.excel.PivotCacheDefinition",
    "inherits": "Ext.exporter.file.ooxml.XmlRels",
    "autoName": "MyPivotCacheDefinition",
    "cfgs": [
        {
            "name": "backgroundQuery",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "cacheFields",
            "type": "array",
            "bindable": true
        },
        {
            "name": "cacheRecords",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "cacheSource",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "createdVersion",
            "type": "number",
            "bindable": true
        },
        {
            "name": "enableRefresh",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "invalid",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "minRefreshableVersion",
            "type": "number",
            "bindable": true
        },
        {
            "name": "missingItemsLimit",
            "type": "number",
            "bindable": true
        },
        {
            "name": "optimizeMemory",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "pivotCache",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "recordCount",
            "type": "number",
            "bindable": true
        },
        {
            "name": "refreshedBy",
            "type": "string",
            "bindable": true
        },
        {
            "name": "refreshedDateIso",
            "type": "date",
            "bindable": true
        },
        {
            "name": "refreshedVersion",
            "type": "number",
            "bindable": true
        },
        {
            "name": "refreshOnLoad",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "saveData",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "supportAdvancedDrill",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "supportSubquery",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "tupleCache",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "upgradeOnRefresh",
            "type": "boolean",
            "bindable": true
        }
    ]
});
