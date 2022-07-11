xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.ItemHighlight",
    "className": "Ext.chart.interactions.ItemHighlight",
    "classAlias": "interaction.itemhighlight",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyItemHighlight",
    "cfgs": [
        {
            "name": "multiTooltips",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "sticky",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
