xds.component.Registry.addDefinition({
    "type": "Ext.grid.rowedit.Plugin",
    "className": "Ext.grid.rowedit.Plugin",
    "classAlias": "plugin.rowedit",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyRowEditPlugin",
    "cfgs": [
        {
            "name": "dirtyText",
            "type": "string",
            "defaultValue": 'You need to commit or cancel your changes'
        },
        {
            "name": "editor",
            "type": "object",
            "defaultValue": {
                lazy: true,    
                $value: {
                    xtype: 'roweditor'
                }
            }
        },
        {
            "name": "invalidToastMessage",
            "type": "string",
            "defaultValue": 'Cannot save invalid data'
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "defaultValue": 'doubletap'
        },
        {
            "name": "grid",
            "type": "object",
            "defaultValue": null
        }
    ],
    "eventDefs": [
        {
            "name": "beforeedit",
            "params": [
                {
                    "name": "sender",
                    "type": "Object"
                },
                {
                    "name": "location",
                    "type": "Object"
                },
                {
                    "name": "rowEditor",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "edit",
            "params": [
                {
                    "name": "sender",
                    "type": "Object"
                },
                {
                    "name": "location",
                    "type": "Object"
                },
                {
                    "name": "rowEditor",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "validateedit",
            "params": [
                {
                    "name": "sender",
                    "type": "Object"
                },
                {
                    "name": "location",
                    "type": "Object"
                },
                {
                    "name": "rowEditor",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "canceledit",
            "params": [
                {
                    "name": "sender",
                    "type": "Object"
                },
                {
                    "name": "location",
                    "type": "Object"
                },
                {
                    "name": "rowEditor",
                    "type": "Object"
                }
            ]
        }
    ]
});
