xds.component.Registry.addDefinition({
    "type": "Ext.field.Hidden",
    "className": "Ext.field.Hidden",
    "classAlias": "widget.hiddenfield",
    "inherits": "Ext.field.Input",
    "autoName": "MyHidden",
    "typeAlias": [
        "Ext.form.Hidden"
    ],
    "cfgs": [
        {
            "name": "inputType",
            "type": "object",
            "defaultValue": "hidden",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
