xds.component.Registry.addDefinition({
    "type": "Ext.Indicator",
    "className": "Ext.Indicator",
    "classAlias": "widget.indicator",
    "inherits": "Ext.Component",
    "autoName": "MyIndicator",
    "cfgs": [
        {
            "name": "activeIndex",
            "type": "number",
            "bindable": true
        },
        {
            "name": "count",
            "type": "number",
            "bindable": true
        },
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "horizontal",
            "bindable": true
        },
        {
            "name": "tapMode",
            "type": "string",
            "defaultValue": "direction",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "indicatortap",
            "params": [
                {
                    "name": "indicator",
                    "type": "Ext.Indicator",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Ext.dom.Elemnet",
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
            "name": "next",
            "params": [
                {
                    "name": "indicator",
                    "type": "Ext.Indicator",
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
            "name": "previous",
            "params": [
                {
                    "name": "indicator",
                    "type": "Ext.Indicator",
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
