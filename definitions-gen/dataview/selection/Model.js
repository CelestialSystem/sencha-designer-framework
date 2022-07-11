xds.component.Registry.addDefinition({
    "type": "Ext.dataview.selection.Model",
    "className": "Ext.dataview.selection.Model",
    "classAlias": "selmodel.dataview",
    "inherits": "Ext.Evented",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyModel",
    "cfgs": [
        {
            "name": "deselectable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "disabled",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "multi",
                "simple",
                "single"
            ],
            "defaultValue": "single",
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": "checked",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
