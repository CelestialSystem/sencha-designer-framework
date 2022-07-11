xds.component.Registry.addDefinition({
    "type": "Ext.field.Input",
    "className": "Ext.field.Input",
    "classAlias": "widget.inputfield",
    "inherits": "Ext.field.Field",
    "autoName": "MyInput",
    "cfgs": [
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "readOnly",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
