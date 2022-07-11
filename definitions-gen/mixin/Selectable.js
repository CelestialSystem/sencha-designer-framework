xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Selectable",
    "className": "Ext.mixin.Selectable",
    "inherits": "Ext.Mixin",
    "autoName": "MySelectable",
    "cfgs": [
        {
            "name": "allowDeselect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "deselectOnContainerClick",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "disableSelection",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "MULTI",
                "SIMPLE",
                "SINGLE"
            ],
            "defaultValue": "SINGLE",
            "bindable": true
        },
        {
            "name": "pruneRemoved",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "selected",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "selectionchange",
            "params": [
                {
                    "name": "selectable",
                    "type": "Ext.mixin.Selectable",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
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
