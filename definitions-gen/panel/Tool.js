xds.component.Registry.addDefinition({
    "type": "Ext.panel.Tool",
    "className": "Ext.panel.Tool",
    "classAlias": "widget.tool",
    "inherits": "Ext.Component",
    "autoName": "MyTool",
    "cfgs": [
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-tool"
        },
        {
            "name": "cacheHeight",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "cacheWidth",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "callback",
            "type": "function",
            "params": [
                {
                    "name": "owner",
                    "type": "Ext.Component"
                },
                {
                    "name": "callback"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "toolEl"
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
            "name": "disabledCls",
            "type": "string",
            "defaultValue": "x-tool-disabled"
        },
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "keyMap",
            "type": "object",
            "defaultValue": {
                "scope": "this",
                "SPACE": "onClick",
                "ENTER": "onClick"
            },
            "bindable": true
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{id}-toolEl\" data-ref=\"toolEl\" class=\"{className} {childElCls}\" role=\"presentation\"<tpl if=\"glyph\"><tpl if=\"glyphFontFamily\"> style=\"font-family:{glyphFontFamily};\"></tpl>{glyph}<tpl else>></tpl></div>"
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
            "name": "stopEvent",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "toolOwner",
            "type": "object"
        },
        {
            "name": "tooltip",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "tooltipType",
            "type": "string",
            "defaultValue": "qtip"
        },
        {
            "name": "type",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "click",
            "params": [
                {
                    "name": "tool",
                    "type": "Ext.panel.Tool",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "owner",
                    "type": "Ext.Component",
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
