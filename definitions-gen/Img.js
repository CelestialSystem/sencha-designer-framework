xds.component.Registry.addDefinition({
    "type": "Ext.Img",
    "className": "Ext.Img",
    "classAlias": "widget.image",
    "inherits": "Ext.Component",
    "autoName": "MyImg",
    "cfgs": [
        {
            "name": "alt",
            "type": "string",
            "bindable": true
        },
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": "img",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-img"
        },
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "glyphorig",
            "type": "auto"
        },
        {
            "name": "imgCls",
            "type": "string"
        },
        {
            "name": "src",
            "type": "string",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        }
    ]
});
