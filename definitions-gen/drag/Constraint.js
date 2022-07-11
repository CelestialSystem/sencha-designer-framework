xds.component.Registry.addDefinition({
    "type": "Ext.drag.Constraint",
    "className": "Ext.drag.Constraint",
    "classAlias": "drag.constraint.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyConstraint",
    "cfgs": [
        {
            "name": "element",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "horizontal",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "region",
            "type": "object",
            "bindable": true
        },
        {
            "name": "snap",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "source",
            "type": "object",
            "bindable": true
        },
        {
            "name": "vertical",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "x",
            "type": "array",
            "bindable": true
        },
        {
            "name": "y",
            "type": "array",
            "bindable": true
        }
    ]
});
