xds.component.Registry.addDefinition({
    "type": "Ext.slider.Thumb",
    "className": "Ext.slider.Thumb",
    "classAlias": "widget.thumb",
    "inherits": "Ext.Component",
    "autoName": "MyThumb",
    "cfgs": [
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": {
                "local": true,
                "constrain": {
                    "horizontal": true
                },
                "listeners": {
                    "beforedragstart": "onBeforeDragStart",
                    "dragstart": "onDragStart",
                    "dragmove": "onDragMove",
                    "dragend": "onDragEnd",
                    "scope": "this"
                }
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "fillCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "fillTrack",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
