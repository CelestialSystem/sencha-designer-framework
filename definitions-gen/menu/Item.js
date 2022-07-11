xds.component.Registry.addDefinition({
    "type": "Ext.menu.Item",
    "className": "Ext.menu.Item",
    "classAlias": "widget.menuitem",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Queryable"
    ],
    "autoName": "MyItem",
    "typeAlias": [
        "Ext.menu.TextItem"
    ],
    "cfgs": [
        {
            "name": "activeCls",
            "type": "string",
            "defaultValue": "x-menu-item-active"
        },
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": {
                "role": "presentation"
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
            "defaultValue": "x-menu-item"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "itemEl",
                "iconEl",
                "textEl",
                "arrowEl"
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
            "name": "clickHideDelay",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "destroyMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "disabledCls",
            "type": "string",
            "defaultValue": "x-menu-item-disabled"
        },
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "item",
                    "type": "Ext.menu.Item"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "hideOnClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "href",
            "type": "string",
            "defaultValue": "#"
        },
        {
            "name": "hrefTarget",
            "type": "string"
        },
        {
            "name": "icon",
            "type": "string",
            "defaultValue": "Ext#BLANK_IMAGE_URL",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "menu",
            "type": "object",
            "bindable": true
        },
        {
            "name": "menuAlign",
            "type": "string",
            "defaultValue": "tl-tr?"
        },
        {
            "name": "menuExpandDelay",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "menuHideDelay",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "plain",
            "type": "boolean"
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": "<tpl if=\"plain\">{text}<tpl else><a id=\"{id}-itemEl\" data-ref=\"itemEl\" class=\"{linkCls}<tpl if=\"hasHref\"> {linkHrefCls}</tpl>{childElCls}\" href=\"{href}\" <tpl if=\"hrefTarget\"> target=\"{hrefTarget}\"</tpl> hidefocus=\"true\" unselectable=\"on\"<tpl if=\"tabIndex != null\"> tabindex=\"{tabIndex}\"</tpl><tpl foreach=\"ariaAttributes\"> {$}=\"{.}\"</tpl>><span id=\"{id}-textEl\" data-ref=\"textEl\" class=\"{textCls} {textCls}-{ui} {indentCls}{childElCls}\" unselectable=\"on\" role=\"presentation\">{text}</span><tpl if=\"hasIcon\"><div role=\"presentation\" id=\"{id}-iconEl\" data-ref=\"iconEl\" class=\"{baseIconCls}-{ui} {baseIconCls}{[values.rightIcon ? \"-right\" : \"\"]} {iconCls}{childElCls} {glyphCls}\" style=\"<tpl if=\"icon\">background-image:url({icon});</tpl><tpl if=\"glyph\"><tpl if=\"glyphFontFamily\">font-family:{glyphFontFamily};</tpl>\">{glyph}<tpl else>\"></tpl></div></tpl><tpl if=\"showCheckbox\"><div role=\"presentation\" id=\"{id}-checkEl\" data-ref=\"checkEl\" class=\"{baseIconCls}-{ui} {baseIconCls}{[(values.hasIcon && !values.rightIcon) ? \"-right\" : \"\"]} {groupCls} {checkboxCls}{childElCls}\"></div></tpl><tpl if=\"hasMenu\"><div role=\"presentation\" id=\"{id}-arrowEl\" data-ref=\"arrowEl\" class=\"{arrowCls} {arrowCls}-{ui}{childElCls}\"></div></tpl></a></tpl>",
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
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "tooltip",
            "type": "string",
            "bindable": true,
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
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
            "params": [
                {
                    "name": "item",
                    "type": "Ext.menu.Item",
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
            "name": "click",
            "params": [
                {
                    "name": "item",
                    "type": "Ext.menu.Item",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "deactivate",
            "params": [
                {
                    "name": "item",
                    "type": "Ext.menu.Item",
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
            "name": "iconchange",
            "params": [
                {
                    "name": "menuitem",
                    "type": "Ext.menu.Item",
                    "optional": true
                },
                {
                    "name": "oldIcon",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "newIcon",
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
            "name": "textchange",
            "params": [
                {
                    "name": "menuitem",
                    "type": "Ext.menu.Item",
                    "optional": true
                },
                {
                    "name": "oldText",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "newText",
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
