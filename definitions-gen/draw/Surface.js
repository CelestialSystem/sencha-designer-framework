xds.component.Registry.addDefinition({
    "type": "Ext.draw.Surface",
    "className": "Ext.draw.Surface",
    "classAlias": "widget.surface",
    "inherits": "Ext.draw.SurfaceBase",
    "autoName": "MySurface",
    "cfgs": [
        {
            "name": "background",
            "type": "object",
            "bindable": true
        },
        {
            "name": "dirty",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "flipRtlText",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "items",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "rect",
            "type": "array",
            "bindable": true
        }
    ]
});
