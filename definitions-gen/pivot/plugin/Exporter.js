xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.Exporter",
    "className": "Ext.pivot.plugin.Exporter",
    "classAlias": "plugin.pivotexporter",
    "inherits": "Ext.exporter.Plugin",
    "autoName": "MyExporter",
    "typeAlias": [
        "Mz.pivot.plugin.ExcelExport"
    ],
    "eventDefs": [
        {
            "name": "beforedocumentsave",
            "params": [
                {
                    "name": "pivotGrid",
                    "type": "Ext.pivot.Grid",
                    "optional": true
                },
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dataready",
            "params": [
                {
                    "name": "pivotGrid",
                    "type": "Ext.pivot.Grid",
                    "optional": true
                },
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "documentsave",
            "params": [
                {
                    "name": "pivotGrid",
                    "type": "Ext.pivot.Grid",
                    "optional": true
                },
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
