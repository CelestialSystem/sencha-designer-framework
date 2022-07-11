xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.RangeEditor",
    "className": "Ext.pivot.plugin.RangeEditor",
    "classAlias": "plugin.pivotrangeeditor",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyRangeEditor",
    "cfgs": [
        {
            "name": "defaultUpdater",
            "type": "string",
            "defaultValue": "uniform",
            "bindable": true
        },
        {
            "name": "panel",
            "type": "object",
            "defaultValue": {
                "xtype": "pivotrangeeditor",
                "hidden": true,
                "floated": true,
                "modal": true,
                "hideOnMaskTap": true,
                "right": 0,
                "height": "100%"
            },
            "bindable": true
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
            ],
            "bindable": true
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 400,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "hiderangeeditorpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
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
                    "type": "Ext.Panel",
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
