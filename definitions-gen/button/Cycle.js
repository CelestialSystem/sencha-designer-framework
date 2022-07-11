xds.component.Registry.addDefinition({
    "type": "Ext.button.Cycle",
    "className": "Ext.button.Cycle",
    "classAlias": "widget.cycle",
    "inherits": "Ext.button.Split",
    "autoName": "MyCycle",
    "typeAlias": [
        "Ext.CycleButton"
    ],
    "cfgs": [
        {
            "name": "changeHandler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "forceGlyph",
            "type": "auto"
        },
        {
            "name": "forceIcon",
            "type": "string"
        },
        {
            "name": "prependText",
            "type": "string"
        },
        {
            "name": "showText",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "cycle",
                    "type": "Ext.button.Cycle",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Ext.menu.CheckItem",
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
