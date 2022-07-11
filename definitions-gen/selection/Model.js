xds.component.Registry.addDefinition({
    "type": "Ext.selection.Model",
    "className": "Ext.selection.Model",
    "classAlias": "selection.abstract",
    "inherits": "Ext.mixin.Observable",
    "mixin": [
        "Ext.util.StoreHolder",
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyModel",
    "typeAlias": [
        "Ext.AbstractSelectionModel"
    ],
    "cfgs": [
        {
            "name": "allowDeselect",
            "type": "boolean"
        },
        {
            "name": "ignoreRightMouseSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "MULTI",
                "SIMPLE",
                "SINGLE"
            ]
        },
        {
            "name": "pruneRemoved",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "toggleOnClick",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "focuschange",
            "params": [
                {
                    "name": "model",
                    "type": "Ext.selection.Model",
                    "optional": true
                },
                {
                    "name": "oldFocused",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "newFocused",
                    "type": "Ext.data.Model",
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
            "name": "selectionchange",
            "params": [
                {
                    "name": "model",
                    "type": "Ext.selection.Model",
                    "optional": true
                },
                {
                    "name": "selected",
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
