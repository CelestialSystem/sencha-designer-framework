xds.component.Registry.addDefinition({
    "type": "Ext.form.FieldAncestor",
    "className": "Ext.form.FieldAncestor",
    "inherits": "Ext.Mixin",
    "autoName": "MyFieldAncestor",
    "cfgs": [
        {
            "name": "fieldDefaults",
            "type": "object"
        }
    ],
    "eventDefs": [
        {
            "name": "fielderrorchange",
            "params": [
                {
                    "name": "fieldancestor",
                    "type": "Ext.form.FieldAncestor",
                    "optional": true
                },
                {
                    "name": "field",
                    "type": "Ext.form.Labelable",
                    "optional": true
                },
                {
                    "name": "error",
                    "type": "String",
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
            "name": "fieldvaliditychange",
            "params": [
                {
                    "name": "fieldancestor",
                    "type": "Ext.form.FieldAncestor",
                    "optional": true
                },
                {
                    "name": "field",
                    "type": "Ext.form.Labelable",
                    "optional": true
                },
                {
                    "name": "isValid",
                    "type": "String",
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
