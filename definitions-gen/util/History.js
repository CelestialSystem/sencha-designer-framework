xds.component.Registry.addDefinition({
    "type": "Ext.util.History",
    "className": "Ext.util.History",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyHistory",
    "typeAlias": [
        "Ext.History"
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "token",
                    "type": "String",
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
            "name": "ready",
            "params": [
                {
                    "name": "history",
                    "type": "Ext.util.History",
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
