xds.component.Registry.addDefinition({
    "type": "Ext.form.Labelable",
    "className": "Ext.form.Labelable",
    "inherits": "Ext.Mixin",
    "autoName": "MyLabelable",
    "cfgs": [
        {
            "name": "activeError",
            "type": "string",
            "bindable": true
        },
        {
            "name": "activeErrorsTpl",
            "type": "template"
        },
        {
            "name": "afterBodyEl",
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
            "name": "afterLabelTextTpl",
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
            "name": "afterLabelTpl",
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
            "name": "afterSubTpl",
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
            "name": "ariaErrorText",
            "type": "string",
            "defaultValue": "Input error. {0}."
        },
        {
            "name": "ariaHelp",
            "type": "string"
        },
        {
            "name": "autoFitErrors",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "baseBodyCls",
            "type": "string",
            "defaultValue": "x-form-item-body"
        },
        {
            "name": "beforeBodyEl",
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
            "name": "beforeLabelTextTpl",
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
            "name": "beforeLabelTpl",
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
            "name": "beforeSubTpl",
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
            "name": "errorMsgCls",
            "type": "string",
            "defaultValue": "x-form-error-msg"
        },
        {
            "name": "fieldBodyCls",
            "type": "string"
        },
        {
            "name": "fieldLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "formItemCls",
            "type": "string",
            "defaultValue": "x-form-item"
        },
        {
            "name": "hideEmptyLabel",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "hideLabel",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "invalidCls",
            "type": "string",
            "defaultValue": "x-form-invalid"
        },
        {
            "name": "labelAlign",
            "type": "string",
            "defaultValue": "left"
        },
        {
            "name": "labelAttrTpl",
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
            "name": "labelCls",
            "type": "string",
            "defaultValue": "x-form-item-label"
        },
        {
            "name": "labelClsExtra",
            "type": "string"
        },
        {
            "name": "labelPad",
            "type": "number",
            "defaultValue": 5
        },
        {
            "name": "labelSeparator",
            "type": "string",
            "defaultValue": ":"
        },
        {
            "name": "labelStyle",
            "type": "string"
        },
        {
            "name": "labelWidth",
            "type": "number",
            "defaultValue": 100
        },
        {
            "name": "msgTarget",
            "type": "string",
            "defaultValue": "qtip"
        },
        {
            "name": "preventMark",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "errorchange",
            "params": [
                {
                    "name": "labelable",
                    "type": "Ext.form.Labelable",
                    "optional": true
                },
                {
                    "name": "error",
                    "type": "String",
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
