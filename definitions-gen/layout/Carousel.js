xds.component.Registry.addDefinition({
    "type": "Ext.layout.Carousel",
    "className": "Ext.layout.Carousel",
    "classAlias": "layout.carousel",
    "inherits": "Ext.layout.Auto",
    "autoName": "MyCarousel",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "frontIndex",
            "type": "number",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "visibleChildren",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        }
    ]
});
