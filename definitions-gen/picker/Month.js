xds.component.Registry.addDefinition({
    "type": "Ext.picker.Month",
    "className": "Ext.picker.Month",
    "classAlias": "widget.monthpicker",
    "inherits": "Ext.Component",
    "autoName": "MyMonth",
    "typeAlias": [
        "Ext.MonthPicker"
    ],
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-monthpicker"
        },
        {
            "name": "cancelText",
            "type": "string",
            "defaultValue": "Cancel"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "bodyEl",
                "prevEl",
                "nextEl",
                "monthEl",
                "yearEl",
                "buttons"
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
            "name": "footerButtonUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "okText",
            "type": "string",
            "defaultValue": "OK"
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{id}-bodyEl\" data-ref=\"bodyEl\" class=\"{baseCls}-body\">",
                "<div id=\"{id}-monthEl\" data-ref=\"monthEl\" class=\"{baseCls}-months\">",
                "<tpl for=\"months\">",
                "<div class=\"{parent.baseCls}-item {parent.baseCls}-month\">",
                "<a style=\"{parent.monthStyle}\" role=\"button\" hidefocus=\"on\" class=\"{parent.baseCls}-item-inner\">{.}</a>",
                "</div>",
                "</tpl>",
                "</div>",
                "<div id=\"{id}-yearEl\" data-ref=\"yearEl\" class=\"{baseCls}-years\">",
                "<div class=\"{baseCls}-yearnav\">",
                "<div class=\"{baseCls}-yearnav-button-ct\">",
                "<a id=\"{id}-prevEl\" data-ref=\"prevEl\" class=\"{baseCls}-yearnav-button {baseCls}-yearnav-prev\" hidefocus=\"on\" role=\"button\"></a>",
                "</div>",
                "<div class=\"{baseCls}-yearnav-button-ct\">",
                "<a id=\"{id}-nextEl\" data-ref=\"nextEl\" class=\"{baseCls}-yearnav-button {baseCls}-yearnav-next\" hidefocus=\"on\" role=\"button\"></a>",
                "</div>",
                "</div>",
                "<tpl for=\"years\">",
                "<div class=\"{parent.baseCls}-item {parent.baseCls}-year\">",
                "<a hidefocus=\"on\" class=\"{parent.baseCls}-item-inner\" role=\"button\">{.}</a>",
                "</div>",
                "</tpl>",
                "</div>",
                "<div class=\"x-clear\"></div>",
                "<tpl if=\"showButtons\">",
                "<div id=\"{id}-buttons\" data-ref=\"buttons\" class=\"{baseCls}-buttons\">{%",
                "var me=values.$comp, okBtn=me.okBtn, cancelBtn=me.cancelBtn;",
                "okBtn.ownerLayout = cancelBtn.ownerLayout = me.componentLayout;",
                "okBtn.ownerCt = cancelBtn.ownerCt = me;",
                "Ext.DomHelper.generateMarkup(okBtn.getRenderTree(), out);",
                "Ext.DomHelper.generateMarkup(cancelBtn.getRenderTree(), out);",
                "%}</div>",
                "</tpl>",
                "</div>"
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
            "name": "showButtons",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "value",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "cancelclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "monthclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "monthdblclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "okclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "select",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "yearclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "yeardblclick",
            "params": [
                {
                    "name": "monthpicker",
                    "type": "Ext.picker.Month",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
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
