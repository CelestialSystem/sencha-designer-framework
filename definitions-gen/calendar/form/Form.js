xds.component.Registry.addDefinition({
    "type": "Ext.calendar.form.Form",
    "className": "Ext.calendar.form.Form",
    "inherits": "Ext.calendar.form.AbstractForm",
    "mixin": [
        "Ext.calendar.form.Base"
    ],
    "autoName": "MyForm",
    "cfgs": [
        {
            "name": "defaultEndTime",
            "type": "array",
            "defaultValue": [
                10,
                0
            ]
        },
        {
            "name": "defaultStartTime",
            "type": "array",
            "defaultValue": [
                9,
                0
            ]
        }
    ]
});
