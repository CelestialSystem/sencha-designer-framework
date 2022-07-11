xds.component.Registry.addDefinition({
    "type": "Ext.d3.svg.Svg",
    "className": "Ext.d3.svg.Svg",
    "classAlias": "widget.d3-svg",
    "inherits": "Ext.d3.Component",
    "autoName": "MySvg",
    "cfgs": [
        {
            "name": "clipScene",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "padding",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "size",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "sceneresize",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.d3.svg.Svg",
                    "optional": true
                },
                {
                    "name": "scene",
                    "type": "d3.selection",
                    "optional": true
                },
                {
                    "name": "size",
                    "type": "Object",
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
            "name": "scenesetup",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.d3.svg.Svg",
                    "optional": true
                },
                {
                    "name": "scene",
                    "type": "d3.selection",
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
