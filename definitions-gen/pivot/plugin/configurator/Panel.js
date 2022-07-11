xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Panel",
    "className": "Ext.pivot.plugin.configurator.Panel",
    "classAlias": "widget.pivotconfigpanel",
    "inherits": "Ext.Panel",
    "autoName": "MyPanel",
    "cfgs": [
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
        }
    ]
});
