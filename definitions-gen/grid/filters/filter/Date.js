xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.filter.Date",
    "className": "Ext.grid.filters.filter.Date",
    "classAlias": "grid.filter.date",
    "inherits": "Ext.grid.filters.filter.TriFilter",
    "autoName": "MyDate",
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "bindable": true
        },
        {
            "name": "fields",
            "type": "object",
            "defaultValue": {
                "lt": {
                    "text": "Before"
                },
                "gt": {
                    "text": "After"
                },
                "eq": {
                    "text": "On"
                }
            },
            "bindable": true
        },
        {
            "name": "maxDate",
            "type": "date"
        },
        {
            "name": "minDate",
            "type": "date"
        },
        {
            "name": "pickerDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "datepicker",
                "border": 0
            },
            "bindable": true
        }
    ]
});
