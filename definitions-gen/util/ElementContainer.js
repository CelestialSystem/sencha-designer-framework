xds.component.Registry.addDefinition({
    "type": "Ext.util.ElementContainer",
    "className": "Ext.util.ElementContainer",
    "inherits": "Ext.Base",
    "autoName": "MyElementContainer",
    "cfgs": [
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": {},
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        }
    ]
});
