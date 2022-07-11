xds.component.Registry.addDefinition({
    "type": "Ext.ux.colorpick.Selection",
    "className": "Ext.ux.colorpick.Selection",
    "inherits": "Ext.Base",
    "autoName": "MySelection",
    "cfgs": [
        {
            "name": "alphaDecimalFormat",
            "type": "string",
            "defaultValue": "#.##",
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "editor": "options",
            "options": [
                "#HEX6",
                "#HEX8",
                "#hex6",
                "#hex8",
                "HEX6",
                "HEX8",
                "RGB",
                "RGBA",
                "hex6",
                "hex8",
                "rgb",
                "rgba"
            ],
            "bindable": true
        },
        {
            "name": "value",
            "type": "string",
            "defaultValue": "FF0000",
            "bindable": true
        }
    ]
});
