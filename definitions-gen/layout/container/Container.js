xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Container",
    "className": "Ext.layout.container.Container",
    "classAlias": "layout.container",
    "inherits": "Ext.layout.Layout",
    "mixin": [
        "Ext.util.ElementContainer"
    ],
    "autoName": "MyContainer",
    "typeAlias": [
        "Ext.layout.ContainerLayout"
    ],
    "cfgs": [
        {
            "name": "itemCls",
            "type": "string"
        }
    ]
});
