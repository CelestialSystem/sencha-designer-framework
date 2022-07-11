xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.Abstract",
    "className": "Ext.chart.interactions.Abstract",
    "classAlias": "widget.interaction",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyAbstract",
    "cfgs": [
        {
            "name": "chart",
            "type": "object",
            "bindable": true
        },
        {
            "name": "enabled",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
