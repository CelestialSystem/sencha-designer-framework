xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.ItemInfo",
    "className": "Ext.chart.interactions.ItemInfo",
    "classAlias": "interaction.iteminfo",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyItemInfo",
    "cfgs": [
        {
            "name": "gestures",
            "type": "object",
            "defaultValue": {
                "tap": "onInfoGesture"
            },
            "bindable": true
        },
        {
            "name": "panel",
            "type": "object",
            "defaultValue": {
                "modal": true,
                "centered": true,
                "width": 300,
                "height": 200,
                "scrollable": "vertical",
                "hideOnMaskTap": true,
                "fullscreen": false,
                "hidden": false,
                "zIndex": 30
            },
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "show",
            "params": [
                {
                    "name": "iteminfo",
                    "type": "Ext.chart.interactions.ItemInfo",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
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
