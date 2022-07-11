xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.ItemInfo",
    "className": "Ext.chart.interactions.ItemInfo",
    "classAlias": "interaction.iteminfo",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyItemInfo",
    "cfgs": [
        {
            "name": "extjsGestures",
            "type": "object",
            "defaultValue": {
                "start": {
                    "event": "click",
                    "handler": "onInfoGesture"
                },
                "move": {
                    "event": "mousemove",
                    "handler": "onInfoGesture"
                },
                "end": {
                    "event": "mouseleave",
                    "handler": "onInfoGesture"
                }
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
