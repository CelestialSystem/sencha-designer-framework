xds.component.Registry.addDefinition({
    "type": "Ext.dataview.listswiper.Stepper",
    "className": "Ext.dataview.listswiper.Stepper",
    "classAlias": "widget.listswiperstepper",
    "inherits": "Ext.dataview.listswiper.Item",
    "autoName": "MyStepper",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "undo",
            "type": "object",
            "defaultValue": {
                "docked": "right",
                "ui": "listswiperstepper-trigger"
            },
            "bindable": true
        }
    ]
});
