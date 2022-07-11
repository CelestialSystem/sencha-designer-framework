xds.component.Registry.addDefinition({
    "type": "Ext.picker.Date",
    "className": "Ext.picker.Date",
    "classAlias": "widget.datepicker",
    "inherits": "Ext.picker.Picker",
    "autoName": "MyDate",
    "typeAlias": [
        "Ext.DatePicker"
    ],
    "cfgs": [
        {
            "name": "dayText",
            "type": "string",
            "defaultValue": "Day",
            "bindable": true
        },
        {
            "name": "doneButton",
            "type": "string",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "monthText",
            "type": "string",
            "defaultValue": "Month",
            "bindable": true
        },
        {
            "name": "slotOrder",
            "type": "array",
            "defaultValue": [
                "month",
                "day",
                "year"
            ],
            "bindable": true
        },
        {
            "name": "slots",
            "type": "array",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "date"
                }
            ]
        },
        {
            "name": "yearFrom",
            "type": "number",
            "defaultValue": 1980,
            "bindable": true
        },
        {
            "name": "yearText",
            "type": "string",
            "defaultValue": "Year",
            "bindable": true
        },
        {
            "name": "yearTo",
            "type": "number",
            "defaultValue": 2019,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "datepicker",
                    "type": "Ext.picker.Date",
                    "optional": true
                },
                {
                    "name": "value",
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
