xds.component.Registry.addDefinition({
    "type": "Ext.form.FieldSet",
    "className": "Ext.form.FieldSet",
    "classAlias": "widget.fieldset",
    "inherits": "Ext.container.Container",
    "mixin": [
        "Ext.form.FieldAncestor"
    ],
    "autoName": "MyFieldSet",
    "cfgs": [
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": "fieldset",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-fieldset"
        },
        {
            "name": "checkbox",
            "type": "object"
        },
        {
            "name": "checkboxToggle",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "checkboxUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "body"
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
            "name": "collapsed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "collapsible",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "descriptionText",
            "type": "string",
            "defaultValue": "{0} field set"
        },
        {
            "name": "expandText",
            "type": "string",
            "defaultValue": "Expand field set"
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "anchor",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": [
                "{%this.renderLegend(out,values);%}",
                "<div id=\"{id}-body\" data-ref=\"body\" class=\"{baseCls}-body {baseCls}-body-{ui} {bodyTargetCls}\" ",
                "role=\"presentation\"<tpl if=\"bodyStyle\"> style=\"{bodyStyle}\"</tpl>>",
                "{%this.renderContainer(out,values);%}",
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
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "collapse",
                "expand"
            ]
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "toggleOnTitleClick",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforecollapse",
            "params": [
                {
                    "name": "fieldset",
                    "type": "Ext.form.FieldSet",
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
            "name": "beforeexpand",
            "params": [
                {
                    "name": "fieldset",
                    "type": "Ext.form.FieldSet",
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
            "name": "collapse",
            "params": [
                {
                    "name": "fieldset",
                    "type": "Ext.form.FieldSet",
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
            "name": "expand",
            "params": [
                {
                    "name": "fieldset",
                    "type": "Ext.form.FieldSet",
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
