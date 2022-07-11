xds.component.Registry.addDefinition({
    "type": "Ext.d3.hierarchy.Pack",
    "className": "Ext.d3.hierarchy.Pack",
    "classAlias": "widget.d3-pack",
    "inherits": "Ext.d3.hierarchy.Hierarchy",
    "autoName": "MyPack",
    "cfgs": [
        {
            "name": "clipText",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "nodeValue",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "textPadding",
            "type": "array",
            "defaultValue": [
                3,
                3
            ],
            "bindable": true
        }
    ]
});
