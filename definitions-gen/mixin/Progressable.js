xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Progressable",
    "className": "Ext.mixin.Progressable",
    "inherits": "Ext.Mixin",
    "autoName": "MyProgressable",
    "cfgs": [
        {
            "name": "dynamic",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "maxProgressInput",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "maxProgressOutput",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "minProgressInput",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "minProgressOutput",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "state",
            "type": "string",
            "bindable": true
        }
    ]
});
