xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Trigger",
    "className": "Ext.form.field.Trigger",
    "classAlias": "widget.triggerfield",
    "inherits": "Ext.form.field.Text",
    "autoName": "MyTrigger",
    "typeAlias": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
    ],
    "cfgs": [
        {
            "name": "triggerCls",
            "type": "string",
            "defaultValue": "x-form-arrow-trigger"
        }
    ]
});
