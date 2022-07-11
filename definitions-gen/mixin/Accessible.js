xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Accessible",
    "className": "Ext.mixin.Accessible",
    "inherits": "Ext.Mixin",
    "autoName": "MyAccessible",
    "cfgs": [
        {
            "name": "ariaAttributes",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ariaDescribedBy",
            "type": "string"
        },
        {
            "name": "ariaLabel",
            "type": "string"
        },
        {
            "name": "ariaLabelledBy",
            "type": "string"
        }
    ]
});
