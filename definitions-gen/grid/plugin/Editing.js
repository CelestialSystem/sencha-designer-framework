xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.Editing",
    "className": "Ext.grid.plugin.Editing",
    "classAlias": "editing.editing",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyEditing",
    "cfgs": [
        {
            "name": "clicksToEdit",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "default",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "triggerEvent",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforeedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.Editing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "canceledit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.Editing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "edit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.Editing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "validateedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.Editing",
                    "optional": true
                },
                {
                    "name": "context",
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
