xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Display",
    "className": "Ext.form.field.Display",
    "classAlias": "widget.displayfield",
    "inherits": "Ext.form.field.Base",
    "autoName": "MyDisplay",
    "typeAlias": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
    ],
    "cfgs": [
        {
            "name": "fieldBodyCls",
            "type": "string",
            "defaultValue": "x-form-display-field-body"
        },
        {
            "name": "fieldCls",
            "type": "string",
            "defaultValue": "x-form-display-field"
        },
        {
            "name": "fieldSubTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{id}\" data-ref=\"inputEl\" role=\"textbox\" aria-readonly=\"true\"",
                " aria-labelledby=\"{cmpId}-labelEl\" {inputAttrTpl}",
                " tabindex=\"<tpl if=\"tabIdx != null\">{tabIdx}<tpl else>-1</tpl>\"",
                "<tpl if=\"fieldStyle\"> style=\"{fieldStyle}\"</tpl>",
                " class=\"{fieldCls} {fieldCls}-{ui}\">{value}</div>",
                {
                    "compiled": true,
                    "disableFormats": true
                }
            ]
        },
        {
            "name": "htmlEncode",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "renderer",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "field",
                    "type": "Ext.form.field.Display"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "submitValue",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
