xds.component.Registry.addDefinition({
    "type": "Ext.dom.CompositeElementLite",
    "className": "Ext.dom.CompositeElementLite",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.dom.Element"
    ],
    "autoName": "MyCompositeElementLite",
    "typeAlias": [
        "Ext.CompositeElementLite"
    ],
    "cfgs": [
        {
            "name": "bubbleEvents",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "listeners",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        }
    ]
});
