xds.component.Registry.addDefinition({
    "type": "Ext.calendar.form.AbstractForm",
    "className": "Ext.calendar.form.AbstractForm",
    "inherits": "Ext.window.Window",
    "autoName": "MyAbstractForm",
    "cfgs": [
        {
            "name": "allDayField",
            "type": "object",
            "defaultValue": {
                "xtype": "checkbox",
                "itemId": "allDay",
                "name": "allDay",
                "boxLabel": "All Day",
                "hideEmptyLabel": false,
                "handler": "onAllDayChange"
            },
            "bindable": true
        },
        {
            "name": "calendarField",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-calendar-picker",
                "fieldLabel": "Calendar",
                "name": "calendarId",
                "forceSelection": true,
                "editable": false,
                "queryMode": "local",
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
                "xtype": "textarea",
                "fieldLabel": "Description",
                "name": "description",
                "flex": 1
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
                "xtype": "datefield",
                "itemId": "endDate",
                "name": "endDate",
                "allowBlank": false
            },
            "bindable": true
        },
        {
            "name": "endTimeField",
            "type": "object",
            "defaultValue": {
                "xtype": "timefield",
                "itemId": "endTime",
                "name": "endTime",
                "margin": "0 0 0 5"
            },
            "bindable": true
        },
        {
            "name": "fromContainer",
            "type": "object",
            "defaultValue": {
                "xtype": "fieldcontainer",
                "fieldLabel": "From",
                "layout": "hbox"
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
                "xtype": "datefield",
                "itemId": "startDate",
                "name": "startDate",
                "allowBlank": false
            },
            "bindable": true
        },
        {
            "name": "startTimeField",
            "type": "object",
            "defaultValue": {
                "xtype": "timefield",
                "itemId": "startTime",
                "name": "startTime",
                "margin": "0 0 0 5"
            },
            "bindable": true
        },
        {
            "name": "titleField",
            "type": "object",
            "defaultValue": {
                "xtype": "textfield",
                "fieldLabel": "Title",
                "name": "title",
                "allowBlank": false
            },
            "bindable": true
        },
        {
            "name": "toContainer",
            "type": "object",
            "defaultValue": {
                "xtype": "fieldcontainer",
                "fieldLabel": "To",
                "layout": "hbox"
            },
            "bindable": true
        }
    ]
});
