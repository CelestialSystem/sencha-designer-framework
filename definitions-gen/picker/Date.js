xds.component.Registry.addDefinition({
    "type": "Ext.picker.Date",
    "className": "Ext.picker.Date",
    "classAlias": "widget.datepicker",
    "inherits": "Ext.Component",
    "autoName": "MyDate",
    "typeAlias": [
        "Ext.DatePicker"
    ],
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "ariaDisabledDatesText",
            "type": "string",
            "defaultValue": "This date is disabled"
        },
        {
            "name": "ariaDisabledDaysText",
            "type": "string",
            "defaultValue": "This day of week is disabled"
        },
        {
            "name": "ariaMaxText",
            "type": "string",
            "defaultValue": "This date is after the maximum date"
        },
        {
            "name": "ariaMinText",
            "type": "string",
            "defaultValue": "This date is before the minimum date"
        },
        {
            "name": "ariaTitle",
            "type": "string",
            "defaultValue": "Date Picker: {0}"
        },
        {
            "name": "ariaTitleDateFormat",
            "type": "string",
            "defaultValue": "F d"
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-datepicker"
        },
        {
            "name": "border",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "innerEl",
                "eventEl",
                "prevEl",
                "nextEl",
                "middleBtnEl",
                "footerEl"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "defaultValue",
            "type": "date",
            "defaultValue": "2019-01-23T10:04:35.713Z"
        },
        {
            "name": "disableAnim",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "disabledCellCls",
            "type": "string",
            "defaultValue": "x-datepicker-disabled"
        },
        {
            "name": "disabledDates",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "disabledDatesRE",
            "type": "regex"
        },
        {
            "name": "disabledDatesText",
            "type": "string",
            "defaultValue": "Disabled"
        },
        {
            "name": "disabledDays",
            "type": "array",
            "bindable": true
        },
        {
            "name": "disabledDaysText",
            "type": "string",
            "defaultValue": "Disabled"
        },
        {
            "name": "footerButtonUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "format",
            "type": "string"
        },
        {
            "name": "handler",
            "type": "function"
        },
        {
            "name": "keyNavConfig",
            "type": "object"
        },
        {
            "name": "longDayFormat",
            "type": "string",
            "defaultValue": "F d, Y"
        },
        {
            "name": "maxDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "maxText",
            "type": "string",
            "defaultValue": "This date is after the maximum date"
        },
        {
            "name": "minDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "minText",
            "type": "string",
            "defaultValue": "This date is before the minimum date"
        },
        {
            "name": "monthYearFormat",
            "type": "string",
            "defaultValue": "F Y"
        },
        {
            "name": "monthYearText",
            "type": "string",
            "defaultValue": "Choose a month (Control+Up/Down to move years)"
        },
        {
            "name": "nextText",
            "type": "string",
            "defaultValue": "Next Month (Control+Right)"
        },
        {
            "name": "prevText",
            "type": "string",
            "defaultValue": "Previous Month (Control+Left)"
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{id}-innerEl\" data-ref=\"innerEl\" role=\"presentation\">",
                "<div class=\"{baseCls}-header\">",
                "<div id=\"{id}-prevEl\" data-ref=\"prevEl\" class=\"{baseCls}-prev {baseCls}-arrow\" role=\"presentation\" title=\"{prevText}\"></div>",
                "<div id=\"{id}-middleBtnEl\" data-ref=\"middleBtnEl\" class=\"{baseCls}-month\" role=\"heading\">{%this.renderMonthBtn(values, out)%}</div>",
                "<div id=\"{id}-nextEl\" data-ref=\"nextEl\" class=\"{baseCls}-next {baseCls}-arrow\" role=\"presentation\" title=\"{nextText}\"></div>",
                "</div>",
                "<table role=\"grid\" id=\"{id}-eventEl\" data-ref=\"eventEl\" class=\"{baseCls}-inner\" cellspacing=\"0\" tabindex=\"0\" aria-readonly=\"true\">",
                "<thead>",
                "<tr role=\"row\">",
                "<tpl for=\"dayNames\">",
                "<th role=\"columnheader\" class=\"{parent.baseCls}-column-header\" aria-label=\"{.}\">",
                "<div role=\"presentation\" class=\"{parent.baseCls}-column-header-inner\">{.:this.firstInitial}</div>",
                "</th>",
                "</tpl>",
                "</tr>",
                "</thead>",
                "<tbody>",
                "<tr role=\"row\">",
                "<tpl for=\"days\">",
                "{#:this.isEndOfWeek}",
                "<td role=\"gridcell\">",
                "<div hidefocus=\"on\" class=\"{parent.baseCls}-date\"></div>",
                "</td>",
                "</tpl>",
                "</tr>",
                "</tbody>",
                "</table>",
                "<tpl if=\"showToday\">",
                "<div id=\"{id}-footerEl\" data-ref=\"footerEl\" role=\"presentation\" class=\"{baseCls}-footer\">{%this.renderTodayBtn(values, out)%}</div>",
                "</tpl>",
                "<div id=\"{id}-todayText\" class=\"x-hidden-clip\">{todayText}.</div>",
                "<div id=\"{id}-ariaMinText\" class=\"x-hidden-clip\">{ariaMinText}.</div>",
                "<div id=\"{id}-ariaMaxText\" class=\"x-hidden-clip\">{ariaMaxText}.</div>",
                "<div id=\"{id}-ariaDisabledDaysText\" class=\"x-hidden-clip\">{ariaDisabledDaysText}.</div>",
                "<div id=\"{id}-ariaDisabledDatesText\" class=\"x-hidden-clip\">{ariaDisabledDatesText}.</div>",
                "</div>",
                {}
            ],
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "selectedCls",
            "type": "string",
            "defaultValue": "x-datepicker-selected"
        },
        {
            "name": "showToday",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "startDay",
            "type": "number"
        },
        {
            "name": "todayText",
            "type": "string",
            "defaultValue": "Today"
        },
        {
            "name": "todayTip",
            "type": "string",
            "defaultValue": "{0} (Spacebar)"
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
