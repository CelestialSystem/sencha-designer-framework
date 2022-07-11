xds.component.Registry.addDefinition({
    "type": "Ext.exporter.Plugin",
    "className": "Ext.exporter.Plugin",
    "classAlias": "plugin.exporterplugin",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyPlugin",
    "eventDefs": [
        {
            "name": "beforedocumentsave",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
                    "name": "component",
                    "type": "Ext.Component",
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
                    "name": "component",
                    "type": "Ext.Component",
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
