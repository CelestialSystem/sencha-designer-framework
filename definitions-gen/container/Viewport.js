xds.component.Registry.addDefinition({
    "type": "Ext.container.Viewport",
    "className": "Ext.container.Viewport",
    "classAlias": "widget.viewport",
    "inherits": "Ext.container.Container",
    "mixin": [
        "Ext.mixin.Responsive"
    ],
    "autoName": "MyViewport",
    "typeAlias": [
        "Ext.Viewport"
    ],
    "cfgs": [
        {
            "name": "maxUserScale",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "scrollable",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
