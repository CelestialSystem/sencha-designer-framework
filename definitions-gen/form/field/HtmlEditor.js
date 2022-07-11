xds.component.Registry.addDefinition({
    "type": "Ext.form.field.HtmlEditor",
    "className": "Ext.form.field.HtmlEditor",
    "classAlias": "widget.htmleditor",
    "inherits": "Ext.form.FieldContainer",
    "mixin": [
        "Ext.form.field.Field"
    ],
    "autoName": "MyHtmlEditor",
    "typeAlias": [
        "Ext.form.HtmlEditor"
    ],
    "cfgs": [
        {
            "name": "afterIFrameTpl",
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
            "name": "afterTextAreaTpl",
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
            "name": "allowDomMove",
            "type": "boolean",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "autoCreate",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "beforeIFrameTpl",
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
            "name": "beforeTextAreaTpl",
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
            "name": "buttonDefaults",
            "type": "object"
        },
        {
            "name": "createLinkText",
            "type": "string",
            "defaultValue": "Please enter the URL for the link:"
        },
        {
            "name": "defaultButtonUI",
            "type": "string",
            "defaultValue": "default-toolbar"
        },
        {
            "name": "defaultLinkValue",
            "type": "string",
            "defaultValue": "http://"
        },
        {
            "name": "defaultValue",
            "type": "string",
            "defaultValue": "&#8203;"
        },
        {
            "name": "enableAlignments",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableColors",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableFont",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableFontSize",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableFormat",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableLinks",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableLists",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableSourceEdit",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "fieldCls",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "focusCls",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "fontFamilies",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "Arial",
                "Courier New",
                "Tahoma",
                "Times New Roman",
                "Verdana"
            ]
        },
        {
            "name": "iframeAttrTpl",
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
            "name": "inputType",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "invalidCls",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "invalidText",
            "type": "string",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "readOnly",
            "type": "string",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "tabIndex",
            "type": "string",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
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
            "name": "beforepush",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
                    "optional": true
                },
                {
                    "name": "html",
                    "type": "String",
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
            "name": "beforesync",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
                    "optional": true
                },
                {
                    "name": "html",
                    "type": "String",
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
            "name": "blur",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "editmodechange",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
                    "optional": true
                },
                {
                    "name": "sourceEdit",
                    "type": "Boolean",
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
            "name": "focus",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "initialize",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
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
            "name": "push",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
                    "optional": true
                },
                {
                    "name": "html",
                    "type": "String",
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
            "name": "specialkey",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "sync",
            "params": [
                {
                    "name": "htmleditor",
                    "type": "Ext.form.field.HtmlEditor",
                    "optional": true
                },
                {
                    "name": "html",
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
