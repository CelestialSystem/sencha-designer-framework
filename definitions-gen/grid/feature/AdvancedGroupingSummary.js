xds.component.Registry.addDefinition({
    "type": "Ext.grid.feature.AdvancedGroupingSummary",
    "className": "Ext.grid.feature.AdvancedGroupingSummary",
    "classAlias": "feature.advancedgroupingsummary",
    "inherits": "Ext.grid.feature.AdvancedGrouping",
    "autoName": "MyAdvancedGroupingSummary",
    "cfgs": [
        {
            "name": "summaryPosition",
            "type": "string",
            "defaultValue": "docked"
        },
        {
            "name": "dock",
            "type": "string",
            "defaultValue": "bottom"
        }
    ]
});
