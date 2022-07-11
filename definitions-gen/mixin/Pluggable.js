xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Pluggable",
    "className": "Ext.mixin.Pluggable",
    "inherits": "Ext.Base",
    "autoName": "MyPluggable",
    "cfgs": [
        {
            "name": "plugins",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
