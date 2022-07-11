xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.RangeEditor",
    "className": "Ext.pivot.plugin.RangeEditor",
    "classAlias": "plugin.pivotrangeeditor",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyRangeEditor",
    "typeAlias": [
        "Mz.pivot.plugin.RangeEditor"
    ],
    "cfgs": [
        {
            "name": "defaultUpdater",
            "type": "string",
            "defaultValue": "uniform"
        },
        {
            "name": "height",
            "type": "number"
        },
        {
            "name": "onAfterRecordsUpdate",
            "type": "function"
        },
        {
            "name": "onBeforeRecordsUpdate",
            "type": "function"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "textButtonCancel",
            "type": "string",
            "defaultValue": "Cancel"
        },
        {
            "name": "textButtonOk",
            "type": "string",
            "defaultValue": "Ok"
        },
        {
            "name": "textFieldEdit",
            "type": "string",
            "defaultValue": "Field"
        },
        {
            "name": "textFieldType",
            "type": "string",
            "defaultValue": "Type"
        },
        {
            "name": "textFieldValue",
            "type": "string",
            "defaultValue": "Value"
        },
        {
            "name": "textWindowTitle",
            "type": "string",
            "defaultValue": "Range editor"
        },
        {
            "name": "updaters",
            "type": "array",
            "defaultValue": [
                [
                    "percentage",
                    "Percentage"
                ],
                [
                    "increment",
                    "Increment"
                ],
                [
                    "overwrite",
                    "Overwrite"
                ],
                [
                    "uniform",
                    "Uniform"
                ]
            ]
        },
        {
            "name": "width",
            "type": "number"
        }
    ],
    "eventDefs": [
        {
            "name": "hiderangeeditorpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.window.Window",
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
            "name": "pivotbeforeupdate",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
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
            "name": "pivotupdate",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
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
            "name": "showrangeeditorpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.window.Window",
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
