xds.component.Registry.addDefinition({
    "type": "Ext.button.Button",
    "className": "Ext.button.Button",
    "classAlias": "widget.button",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Queryable"
    ],
    "autoName": "MyButton",
    "typeAlias": [
        "Ext.Button"
    ],
    "cfgs": [
        {
            "name": "allowDepress",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "arrowAlign",
            "type": "string",
            "defaultValue": "right"
        },
        {
            "name": "arrowCls",
            "type": "string",
            "defaultValue": "arrow"
        },
        {
            "name": "arrowVisible",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": {
                "tag": "a",
                "hidefocus": "on",
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
            "defaultValue": "x-btn"
        },
        {
            "name": "baseParams",
            "type": "object"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "btnEl",
                "btnWrap",
                "btnInnerEl",
                "btnIconEl",
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
            "name": "clickEvent",
            "type": "string",
            "defaultValue": "click"
        },
        {
            "name": "cls",
            "type": "string"
        },
        {
            "name": "destroyMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "enableToggle",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "frame",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "handleMouseEvents",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button"
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
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "href",
            "type": "string",
            "bindable": true
        },
        {
            "name": "hrefTarget",
            "type": "string",
            "defaultValue": "_blank"
        },
        {
            "name": "icon",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconAlign",
            "type": "string",
            "defaultValue": "left",
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
                "SPACE": "onEnterKey",
                "ENTER": "onEnterKey",
                "DOWN": "onDownKey"
            },
            "bindable": true
        },
        {
            "name": "menu",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "menuAlign",
            "type": "string",
            "defaultValue": "tl-bl?"
        },
        {
            "name": "minWidth",
            "type": "number",
            "bindable": true
        },
        {
            "name": "overCls",
            "type": "string",
            "defaultValue": "x-btn-over"
        },
        {
            "name": "overflowText",
            "type": "string"
        },
        {
            "name": "params",
            "type": "object",
            "bindable": true
        },
        {
            "name": "pressed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "preventDefault",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "pressed": 1
            },
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
            "defaultValue": "<span id=\"{id}-btnWrap\" data-ref=\"btnWrap\" role=\"presentation\" unselectable=\"on\" style=\"{btnWrapStyle}\" class=\"{btnWrapCls} {btnWrapCls}-{ui} {splitCls}{childElCls}\"><span id=\"{id}-btnEl\" data-ref=\"btnEl\" role=\"presentation\" unselectable=\"on\" style=\"{btnElStyle}\" class=\"{btnCls} {btnCls}-{ui} {textCls} {noTextCls} {hasIconCls} {iconAlignCls} {textAlignCls} {btnElAutoHeightCls}{childElCls}\"><tpl if=\"iconBeforeText\">{[values.$comp.renderIcon(values)]}</tpl><span id=\"{id}-btnInnerEl\" data-ref=\"btnInnerEl\" unselectable=\"on\" class=\"{innerCls} {innerCls}-{ui}{childElCls}\">{text}</span><tpl if=\"!iconBeforeText\">{[values.$comp.renderIcon(values)]}</tpl></span></span>{[values.$comp.getAfterMarkup ? values.$comp.getAfterMarkup(values) : \"\"]}<tpl if=\"closable\"><span id=\"{id}-closeEl\" data-ref=\"closeEl\" class=\"{baseCls}-close-btn\"><tpl if=\"closeText\"> {closeText}</tpl></span></tpl><tpl if=\"split\"><span id=\"{id}-arrowEl\" class=\"{arrowElCls}\" data-ref=\"arrowEl\" role=\"button\" hidefocus=\"on\" unselectable=\"on\"<tpl if=\"tabIndex != null\"> tabindex=\"{tabIndex}\"</tpl><tpl foreach=\"arrowElAttributes\"> {$}=\"{.}\"</tpl> style=\"{arrowElStyle}\">{arrowElText}</span></tpl>",
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
            "name": "repeat",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scale",
            "type": "string",
            "editor": "options",
            "options": [
                "large",
                "medium",
                "small"
            ],
            "defaultValue": "small",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "showEmptyMenu",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "shrinkWrap",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 3
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
            "bindable": true
        },
        {
            "name": "textAlign",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "toggleGroup",
            "type": "string"
        },
        {
            "name": "toggleHandler",
            "type": "function",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button"
                },
                {
                    "name": "state",
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
        },
        {
            "name": "value",
            "type": "auto"
        }
    ],
    "eventDefs": [
        {
            "name": "beforetoggle",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "pressed",
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
            "name": "click",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
            "name": "glyphchange",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "newGlyph",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldGlyph",
                    "type": "Number/String",
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
                    "name": "button",
                    "type": "Ext.button.Button",
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
            "name": "menuhide",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
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
            "name": "menushow",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
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
            "name": "menutriggerout",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
            "name": "menutriggerover",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
            "name": "mouseout",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
            "name": "mouseover",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Event",
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
                    "name": "button",
                    "type": "Ext.button.Button",
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
        },
        {
            "name": "toggle",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.button.Button",
                    "optional": true
                },
                {
                    "name": "pressed",
                    "type": "Boolean",
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
