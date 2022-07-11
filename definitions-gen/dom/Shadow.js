xds.component.Registry.addDefinition({
    "type": "Ext.dom.Shadow",
    "className": "Ext.dom.Shadow",
    "inherits": "Ext.dom.Underlay",
    "autoName": "MyShadow",
    "typeAlias": [
        "Ext.Shadow"
    ],
    "cfgs": [
        {
            "name": "mode",
            "type": "string",
            "defaultValue": "drop"
        },
        {
            "name": "offset",
            "type": "number",
            "defaultValue": 4
        }
    ]
});
