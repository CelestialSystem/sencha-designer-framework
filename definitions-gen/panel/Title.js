xds.component.Registry.addDefinition({
    "type": "Ext.panel.Title",
    "className": "Ext.panel.Title",
    "classAlias": "widget.title",
    "inherits": "Ext.Component",
    "autoName": "MyTitle",
    "cfgs": [
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": {
                "role": "presentation",
                "unselectable": "on"
            },
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-title"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "textEl",
                "iconEl",
                "iconWrapEl"
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
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "icon",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": "<tpl if=\"iconMarkup && iconBeforeTitle\">{iconMarkup}</tpl><div id=\"{id}-textEl\" data-ref=\"textEl\" class=\"{textCls} {textCls}-{ui} {itemCls}{childElCls}\" unselectable=\"on\"<tpl if=\"textElRole\"> role=\"{textElRole}\"</tpl>>{text}</div><tpl if=\"iconMarkup && !iconBeforeTitle\">{iconMarkup}</tpl>",
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
            "name": "rotation",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "default",
                    "default"
                ],
                [
                    "0",
                    0
                ],
                [
                    "1",
                    1
                ],
                [
                    "2",
                    2
                ]
            ],
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "defaultValue": "&#160;",
            "bindable": true
        },
        {
            "name": "textAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        }
    ]
});
