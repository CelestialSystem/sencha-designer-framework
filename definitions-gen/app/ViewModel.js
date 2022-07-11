xds.component.Registry.addDefinition({
    "type": "Ext.app.ViewModel",
    "className": "Ext.app.ViewModel",
    "classAlias": "viewmodel.default",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable",
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyViewModel",
    "cfgs": [
        {
            "name": "data",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "formulas",
            "type": "object",
            "bindable": true
        },
        {
            "name": "links",
            "type": "object",
            "bindable": true
        },
        {
            "name": "parent",
            "type": "object",
            "bindable": true
        },
        {
            "name": "schema",
            "type": "string",
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "session",
            "type": "object",
            "bindable": true
        },
        {
            "name": "stores",
            "type": "object",
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "bindable": true
        }
    ]
});
