xds.component.Registry.addDefinition({
    "type": "Ext.calendar.form.AbstractForm",
    "className": "Ext.calendar.form.AbstractForm",
    "inherits": "Ext.form.Panel",
    "autoName": "MyAbstractForm",
    "cfgs": [
        {
            "name": "allDayField",
            "type": "object",
            "defaultValue": {
                "xtype": "checkboxfield",
                "itemId": "allDay",
                "name": "allDay",
                "label": "All Day",
                "listeners": {
                    "change": "onAllDayChange"
                }
            },
            "bindable": true
        },
        {
            "name": "calendarField",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-calendar-picker",
                "label": "Calendar",
                "name": "calendarId",
                "displayField": "title",
                "valueField": "id"
            },
            "bindable": true
        },
        {
            "name": "cancelButton",
            "type": "object",
            "defaultValue": {
                "text": "Cancel",
                "handler": "onCancelTap"
            },
            "bindable": true
        },
        {
            "name": "descriptionField",
            "type": "object",
            "defaultValue": {
                "xtype": "textareafield",
                "label": "Description",
                "name": "description",
                "flex": 1,
                "minHeight": "6em"
            },
            "bindable": true
        },
        {
            "name": "dropButton",
            "type": "object",
            "defaultValue": {
                "text": "Delete",
                "handler": "onDropTap"
            },
            "bindable": true
        },
        {
            "name": "endDateField",
            "type": "object",
            "defaultValue": {
                "xtype": "datepickerfield",
                "label": "To",
                "itemId": "endDate",
                "name": "endDate"
            },
            "bindable": true
        },
        {
            "name": "endTimeField",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-timefield",
                "label": "&#160;",
                "itemId": "endTime",
                "name": "endTime"
            },
            "bindable": true
        },
        {
            "name": "saveButton",
            "type": "object",
            "defaultValue": {
                "text": "Save",
                "handler": "onSaveTap"
            },
            "bindable": true
        },
        {
            "name": "startDateField",
            "type": "object",
            "defaultValue": {
                "xtype": "datepickerfield",
                "label": "From",
                "itemId": "startDate",
                "name": "startDate"
            },
            "bindable": true
        },
        {
            "name": "startTimeField",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-timefield",
                "label": "&#160;",
                "itemId": "startTime",
                "name": "startTime"
            },
            "bindable": true
        },
        {
            "name": "titleField",
            "type": "object",
            "defaultValue": {
                "xtype": "textfield",
                "label": "Title",
                "name": "title"
            },
            "bindable": true
        }
    ]
});
