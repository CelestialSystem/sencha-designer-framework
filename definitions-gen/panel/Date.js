xds.component.Registry.addDefinition({
    "type": "Ext.panel.Date",
    "className": "Ext.panel.Date",
    "classAlias": "widget.datepanel",
    "inherits": "Ext.Panel",
    "autoName": "MyDate",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoConfirm",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "captionFormat",
            "type": "string",
            "defaultValue": "F Y",
            "bindable": true
        },
        {
            "name": "dateCellFormat",
            "type": "string",
            "defaultValue": "j",
            "bindable": true
        },
        {
            "name": "disabledDates",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "regex"
                }
            ]
        },
        {
            "name": "disabledDays",
            "type": "array",
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "bindable": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "handler"
                }
            ]
        },
        {
            "name": "headerFormat",
            "type": "string",
            "defaultValue": "D, M j Y",
            "bindable": true
        },
        {
            "name": "headerLength",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "hideCaptions",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "hideOutside",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maxDate",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "minDate",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "navigationPosition",
            "type": "string",
            "editor": "options",
            "options": [
                "caption",
                "header"
            ],
            "defaultValue": "header",
            "bindable": true
        },
        {
            "name": "nextText",
            "type": "string",
            "defaultValue": "Next Month (Control+Right)",
            "bindable": true
        },
        {
            "name": "panes",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "prevText",
            "type": "string",
            "defaultValue": "Previous Month (Control+Left)",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "selectOnNavigate",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showAfterMaxDate",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "showBeforeMinDate",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "showFooter",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "showTodayButton",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "specialDates",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "specialDays",
            "type": "array",
            "bindable": true
        },
        {
            "name": "splitTitle",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "startDay",
            "type": "number",
            "bindable": true
        },
        {
            "name": "titleAnimation",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "transformCellCls",
            "type": "function",
            "params": [
                {
                    "name": "transformCellCls"
                }
            ]
        },
        {
            "name": "value",
            "type": "date",
            "bindable": true
        },
        {
            "name": "weekendDays",
            "type": "array",
            "bindable": true
        },
        {
            "name": "yearPicker",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "yearPickerDefaults",
            "type": "object",
            "bindable": true
        }
    ]
});
