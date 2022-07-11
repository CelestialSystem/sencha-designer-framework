xds.component.Registry.addDefinition({
    "type": "Ext.drag.proxy.Placeholder",
    "className": "Ext.drag.proxy.Placeholder",
    "classAlias": "drag.proxy.placeholder",
    "inherits": "Ext.drag.proxy.None",
    "autoName": "MyPlaceholder",
    "cfgs": [
        {
            "name": "cls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "cursorOffset",
            "type": "array",
            "defaultValue": [
                12,
                20
            ],
            "bindable": true
        },
        {
            "name": "html",
            "type": "string",
            "bindable": true
        },
        {
            "name": "invalidCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "validCls",
            "type": "string",
            "bindable": true
        }
    ]
});
