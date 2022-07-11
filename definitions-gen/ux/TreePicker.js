xds.component.Registry.addDefinition({
    "type": "Ext.ux.TreePicker",
    "className": "Ext.ux.TreePicker",
    "classAlias": "widget.treepicker",
    "inherits": "Ext.form.field.Picker",
    "autoName": "MyTreePicker",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "displayField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "maxPickerHeight",
            "type": "number",
            "defaultValue": 300,
            "bindable": true
        },
        {
            "name": "minPickerHeight",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "selectOnTab",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "select",
            "params": [
                {
                    "name": "picker",
                    "type": "Ext.ux.TreePicker",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
