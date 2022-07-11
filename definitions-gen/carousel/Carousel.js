xds.component.Registry.addDefinition({
    "type": "Ext.carousel.Carousel",
    "className": "Ext.carousel.Carousel",
    "classAlias": "widget.carousel",
    "inherits": "Ext.Container",
    "autoName": "MyCarousel",
    "typeAlias": [
        "Ext.Carousel"
    ],
    "cfgs": [
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "horizontal",
            "bindable": true
        },
        {
            "name": "draggable",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "indicator",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "ui",
            "type": "string",
            "defaultValue": "dark",
            "bindable": true
        }
    ]
});
