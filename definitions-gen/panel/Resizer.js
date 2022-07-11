xds.component.Registry.addDefinition({
    "type": "Ext.panel.Resizer",
    "className": "Ext.panel.Resizer",
    "inherits": "Ext.Base",
    "autoName": "MyResizer",
    "cfgs": [
        {
            "name": "constrainToParent",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "dynamic",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "edges",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "maxSize",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "minSize",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "preserveRatio",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "snap",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "split",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "target",
            "type": "object",
            "bindable": true
        }
    ]
});
