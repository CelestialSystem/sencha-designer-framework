xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Panel",
    "className": "Ext.pivot.plugin.configurator.Panel",
    "classAlias": "widget.pivotconfigpanel",
    "inherits": "Ext.panel.Panel",
    "mixin": [
        "Ext.mixin.FocusableContainer"
    ],
    "autoName": "MyPanel",
    "cfgs": [
        {
            "name": "addToText",
            "type": "string",
            "defaultValue": "Add to {0}"
        },
        {
            "name": "fieldSettingsText",
            "type": "string",
            "defaultValue": "Field settings"
        },
        {
            "name": "moveBeginText",
            "type": "string",
            "defaultValue": "Move to beginning"
        },
        {
            "name": "moveDownText",
            "type": "string",
            "defaultValue": "Move down"
        },
        {
            "name": "moveEndText",
            "type": "string",
            "defaultValue": "Move to end"
        },
        {
            "name": "moveToText",
            "type": "string",
            "defaultValue": "Move to {0}"
        },
        {
            "name": "moveUpText",
            "type": "string",
            "defaultValue": "Move up"
        },
        {
            "name": "panelAggFieldsText",
            "type": "string",
            "defaultValue": "Drop Agg Fields Here"
        },
        {
            "name": "panelAggFieldsTitle",
            "type": "string",
            "defaultValue": "Values"
        },
        {
            "name": "panelAllFieldsText",
            "type": "string",
            "defaultValue": "Drop Unused Fields Here"
        },
        {
            "name": "panelAllFieldsTitle",
            "type": "string",
            "defaultValue": "All fields"
        },
        {
            "name": "panelLeftFieldsText",
            "type": "string",
            "defaultValue": "Drop Row Fields Here"
        },
        {
            "name": "panelLeftFieldsTitle",
            "type": "string",
            "defaultValue": "Row labels"
        },
        {
            "name": "panelTopFieldsText",
            "type": "string",
            "defaultValue": "Drop Column Fields Here"
        },
        {
            "name": "panelTopFieldsTitle",
            "type": "string",
            "defaultValue": "Column labels"
        },
        {
            "name": "removeFieldText",
            "type": "string",
            "defaultValue": "Remove field"
        }
    ]
});
