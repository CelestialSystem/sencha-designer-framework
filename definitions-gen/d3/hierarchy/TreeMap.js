xds.component.Registry.addDefinition({
    "type": "Ext.d3.hierarchy.TreeMap",
    "className": "Ext.d3.hierarchy.TreeMap",
    "classAlias": "widget.d3-treemap",
    "inherits": "Ext.d3.hierarchy.Hierarchy",
    "autoName": "MyTreeMap",
    "cfgs": [
        {
            "name": "busyLayoutText",
            "type": "string",
            "defaultValue": "Layout in progress...",
            "bindable": true
        },
        {
            "name": "leafTile",
            "type": "object",
            "defaultValue": {
                "padding": 0
            },
            "bindable": true
        },
        {
            "name": "parentTile",
            "type": "object",
            "defaultValue": {
                "padding": 4,
                "label": {
                    "offset": [
                        5,
                        2
                    ],
                    "clipSize": [
                        110,
                        40
                    ]
                }
            },
            "bindable": true
        },
        {
            "name": "scaleLabels",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "tiling",
            "type": "function",
            "bindable": true
        }
    ]
});
