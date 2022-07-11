xds.component.Registry.addDefinition({
    "type": "Ext.Img",
    "className": "Ext.Img",
    "classAlias": "widget.image",
    "inherits": "Ext.Component",
    "autoName": "MyImg",
    "typeAlias": [
        "Ext.Image"
    ],
    "cfgs": [
        {
            "name": "backgroundCls",
            "type": "string",
            "defaultValue": "x-img-background",
            "bindable": true
        },
        {
            "name": "imageCls",
            "type": "string",
            "defaultValue": "x-img-image",
            "bindable": true
        },
        {
            "name": "mode",
            "type": "string",
            "defaultValue": "background",
            "bindable": true
        },
        {
            "name": "src",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "error",
            "params": [
                {
                    "name": "image",
                    "type": "Ext.Img",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "load",
            "params": [
                {
                    "name": "image",
                    "type": "Ext.Img",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "tap",
            "params": [
                {
                    "name": "image",
                    "type": "Ext.Img",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
