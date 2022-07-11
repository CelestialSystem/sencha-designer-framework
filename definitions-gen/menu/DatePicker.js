xds.component.Registry.addDefinition({
    "type": "Ext.menu.DatePicker",
    "className": "Ext.menu.DatePicker",
    "classAlias": "widget.datemenu",
    "inherits": "Ext.menu.Menu",
    "autoName": "MyDatePicker",
    "cfgs": [
        {
            "name": "ariaLabel",
            "type": "string",
            "defaultValue": "Date picker"
        },
        {
            "name": "hideOnClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "pickerCfg",
            "type": "object"
        },
        {
            "name": "pickerId",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "select",
            "params": [
                {
                    "name": "datepicker",
                    "type": "Ext.picker.Date",
                    "optional": true
                },
                {
                    "name": "date",
                    "type": "Date",
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
