xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.BaseExporter",
    "className": "Ext.grid.plugin.BaseExporter",
    "inherits": "Ext.exporter.Plugin",
    "autoName": "MyBaseExporter",
    "eventDefs": [
        {
            "name": "beforedocumentsave",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
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
                    "name": "grid",
                    "type": "Ext.grid.Panel",
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
                    "name": "grid",
                    "type": "Ext.grid.Panel",
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
