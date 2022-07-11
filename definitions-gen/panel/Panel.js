xds.component.Registry.addDefinition({
    "type": "Ext.panel.Panel",
    "className": "Ext.panel.Panel",
    "classAlias": "widget.panel",
    "inherits": "Ext.container.Container",
    "mixin": [
        "Ext.container.DockingContainer"
    ],
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.Panel"
    ],
    "cfgs": [
        {
            "name": "animCollapse",
            "type": "auto",
            "allowBoolean": true
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-panel"
        },
        {
            "name": "bbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "bodyBorder",
            "type": "boolean"
        },
        {
            "name": "bodyCls",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "bodyPadding",
            "type": "auto"
        },
        {
            "name": "bodyStyle",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "border",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "buttonAlign",
            "type": "string"
        },
        {
            "name": "buttons",
            "type": "array"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "bodyWrap",
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
            "name": "closable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "closeAction",
            "type": "string",
            "defaultValue": "destroy"
        },
        {
            "name": "closeToolText",
            "type": "string",
            "defaultValue": "Close panel"
        },
        {
            "name": "collapsed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "collapsedCls",
            "type": "string",
            "defaultValue": "collapsed"
        },
        {
            "name": "collapseDirection",
            "type": "string"
        },
        {
            "name": "collapseFirst",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "collapseMode",
            "type": "string"
        },
        {
            "name": "collapseToolText",
            "type": "string",
            "defaultValue": "Collapse panel"
        },
        {
            "name": "collapsible",
            "type": "boolean"
        },
        {
            "name": "componentLayout",
            "type": "string",
            "defaultValue": "dock",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "constrain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "constrainHeader",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "defaultButton",
            "type": "string"
        },
        {
            "name": "defaultButtonTarget",
            "type": "string"
        },
        {
            "name": "dockedItems",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "expandToolText",
            "type": "string",
            "defaultValue": "Expand panel"
        },
        {
            "name": "fbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "floatable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "frame",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "frameHeader",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "glyph",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "header",
            "type": "boolean",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "headerOverCls",
            "type": "string"
        },
        {
            "name": "headerPosition",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "top",
            "bindable": true
        },
        {
            "name": "hideCollapseTool",
            "type": "boolean",
            "defaultValue": false
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
            "name": "lbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "maintainTitlePosition",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "manageHeight",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "maskElement",
            "type": "string",
            "defaultValue": "el"
        },
        {
            "name": "minButtonWidth",
            "type": "number",
            "defaultValue": 75
        },
        {
            "name": "overlapHeader",
            "type": "boolean"
        },
        {
            "name": "placeholder",
            "type": "object"
        },
        {
            "name": "placeholderCollapseHideMode",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "rbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": [
                "<tpl if=\"headingText\">",
                "<div id=\"{id}-headingEl\" data-ref=\"headingEl\" role=\"heading\"",
                " class=\"",
                "x-",
                "hidden-clip\" style=\"height:0\">",
                "{headingText}",
                "</div>",
                "</tpl>",
                "<tpl if=\"hasTabGuard\">{% this.renderTabGuard(out, values, 'before'); %}</tpl>",
                "<div id=\"{id}-bodyWrap\" data-ref=\"bodyWrap\" class=\"{baseCls}-bodyWrap\"",
                "<tpl if=\"bodyWrapAriaAttributes\">",
                "<tpl foreach=\"bodyWrapAriaAttributes\"> {$}=\"{.}\"</tpl>",
                "<tpl else>",
                " role=\"presentation\"",
                "</tpl>",
                ">",
                "{% this.renderDockedItems(out,values,0); %}",
                "<div id=\"{id}-body\" data-ref=\"body\" class=\"{baseCls}-body<tpl if=\"bodyCls\"> {bodyCls}</tpl>",
                " {baseCls}-body-{ui}<tpl if=\"uiCls\">",
                "<tpl for=\"uiCls\"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>",
                "</tpl>{childElCls}\"",
                "<tpl if=\"bodyAriaAttributes\">",
                "<tpl foreach=\"bodyAriaAttributes\"> {$}=\"{.}\"</tpl>",
                "<tpl else>",
                " role=\"presentation\"",
                "</tpl>",
                "<tpl if=\"bodyStyle\"> style=\"{bodyStyle}\"</tpl>>",
                "{%this.renderContainer(out,values);%}",
                "</div>",
                "{% this.renderDockedItems(out,values,1); %}",
                "</div>",
                "<tpl if=\"hasTabGuard\">{% this.renderTabGuard(out, values, 'after'); %}</tpl>"
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
            "name": "shrinkWrap",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 2
        },
        {
            "name": "shrinkWrapDock",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false
        },
        {
            "name": "simpleDrag",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "tbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "titleAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "titleCollapse",
            "type": "boolean"
        },
        {
            "name": "titlePosition",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "titleRotation",
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
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "tools",
            "type": "array"
        }
    ],
    "eventDefs": [
        {
            "name": "beforeclose",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "beforecollapse",
            "params": [
                {
                    "name": "p",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "direction",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "animate",
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
            "name": "beforeexpand",
            "params": [
                {
                    "name": "p",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "animate",
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
            "name": "close",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
                    "name": "p",
                    "type": "Ext.panel.Panel",
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
                    "name": "p",
                    "type": "Ext.panel.Panel",
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
            "name": "float",
            "params": [
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
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "iconalignchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newIconAlign",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldIconAlign",
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
            "name": "iconchange",
            "params": [
                {
                    "name": "p",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newIcon",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldIcon",
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
            "name": "iconclschange",
            "params": [
                {
                    "name": "p",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newIconCls",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldIconCls",
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
            "name": "titlealignchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newTitleAlign",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldTitleAlign",
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
            "name": "titlechange",
            "params": [
                {
                    "name": "p",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newTitle",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldTitle",
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
            "name": "titlepositionchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newTitlePosition",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldTitlePosition",
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
            "name": "titlerotationchange",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
                    "optional": true
                },
                {
                    "name": "newTitleRotation",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldTitleRotation",
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
            "name": "unfloat",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
