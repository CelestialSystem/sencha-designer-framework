xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Checkbox",
    "className": "Ext.form.field.Checkbox",
    "classAlias": "widget.checkboxfield",
    "inherits": "Ext.form.field.Base",
    "autoName": "MyCheckbox",
    "typeAlias": [
        "Ext.form.Checkbox"
    ],
    "cfgs": [
        {
            "name": "afterBoxLabelTextTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "afterBoxLabelTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "beforeBoxLabelTextTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "beforeBoxLabelTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "boxLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "boxLabelAlign",
            "type": "string",
            "defaultValue": "after"
        },
        {
            "name": "boxLabelAttrTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "boxLabelCls",
            "type": "string",
            "defaultValue": "x-form-cb-label"
        },
        {
            "name": "checked",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "checkedCls",
            "type": "string",
            "defaultValue": "x-form-cb-checked"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "boxLabelEl",
                "innerWrapEl",
                "displayEl"
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
            "name": "fieldCls",
            "type": "string",
            "defaultValue": "x-form-field"
        },
        {
            "name": "fieldSubTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{cmpId}-innerWrapEl\" data-ref=\"innerWrapEl\" role=\"presentation\"",
                " class=\"{wrapInnerCls}\">",
                "<tpl if=\"labelAlignedBefore\">",
                "{beforeBoxLabelTpl}",
                "<label id=\"{cmpId}-boxLabelEl\" data-ref=\"boxLabelEl\" {boxLabelAttrTpl} class=\"{boxLabelCls} ",
                "{boxLabelCls}-{ui} {boxLabelCls}-{boxLabelAlign} {noBoxLabelCls} {childElCls}\" for=\"{id}\">",
                "{beforeBoxLabelTextTpl}",
                "{boxLabel}",
                "{afterBoxLabelTextTpl}",
                "</label>",
                "{afterBoxLabelTpl}",
                "</tpl>",
                "<span id=\"{cmpId}-displayEl\" data-ref=\"displayEl\" role=\"presentation\" class=\"{fieldCls} {typeCls} ",
                "{typeCls}-{ui} {inputCls} {inputCls}-{ui} {fixCls} {childElCls} {afterLabelCls}\">",
                "<input type=\"{inputType}\" id=\"{id}\" name=\"{inputName}\" data-ref=\"inputEl\" {inputAttrTpl}",
                "<tpl if=\"tabIdx != null\"> tabindex=\"{tabIdx}\"</tpl>",
                "<tpl if=\"disabled\"> disabled=\"disabled\"</tpl>",
                "<tpl if=\"checked\"> checked=\"checked\"</tpl>",
                "<tpl if=\"fieldStyle\"> style=\"{fieldStyle}\"</tpl>",
                " class=\"{checkboxCls}\" autocomplete=\"off\" hidefocus=\"true\" ",
                "<tpl foreach=\"ariaElAttributes\"> {$}=\"{.}\"</tpl>",
                "<tpl foreach=\"inputElAriaAttributes\"> {$}=\"{.}\"</tpl>",
                "/>",
                "</span>",
                "<tpl if=\"!labelAlignedBefore\">",
                "{beforeBoxLabelTpl}",
                "<label id=\"{cmpId}-boxLabelEl\" data-ref=\"boxLabelEl\" {boxLabelAttrTpl} class=\"{boxLabelCls} ",
                "{boxLabelCls}-{ui} {boxLabelCls}-{boxLabelAlign} {noBoxLabelCls} {childElCls}\" for=\"{id}\">",
                "{beforeBoxLabelTextTpl}",
                "{boxLabel}",
                "{afterBoxLabelTextTpl}",
                "</label>",
                "{afterBoxLabelTpl}",
                "</tpl>",
                "</div>",
                {
                    "disableFormats": true,
                    "compiled": true
                }
            ]
        },
        {
            "name": "focusCls",
            "type": "string",
            "defaultValue": "form-checkbox-focus"
        },
        {
            "name": "handler",
            "type": "function",
            "params": [
                {
                    "name": "checkbox",
                    "type": "Ext.form.field.Checkbox"
                },
                {
                    "name": "checked",
                    "type": "Boolean"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "checkbox"
        },
        {
            "name": "inputValue",
            "type": "string",
            "defaultValue": "on",
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "isTextInput",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "modelValue",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true
        },
        {
            "name": "modelValueUnchecked",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "checked": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "uncheckedValue",
            "type": "string"
        }
    ]
});
