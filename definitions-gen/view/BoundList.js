xds.component.Registry.addDefinition({
    "type": "Ext.view.BoundList",
    "className": "Ext.view.BoundList",
    "classAlias": "widget.boundlist",
    "inherits": "Ext.view.View",
    "mixin": [
        "Ext.mixin.Queryable"
    ],
    "autoName": "MyBoundList",
    "typeAlias": [
        "Ext.BoundList"
    ],
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-boundlist"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "listWrap",
                "listEl"
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
            "name": "componentLayout",
            "type": "string",
            "defaultValue": "boundlist",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "displayField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "focusOnToFront",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "itemCls",
            "type": "string",
            "defaultValue": "x-boundlist-item"
        },
        {
            "name": "navigationModel",
            "type": "object",
            "defaultValue": "boundlist",
            "bindable": true
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "preserveScrollOnRefresh",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "renderTpl",
            "type": "template",
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
            "name": "scrollable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "shadow",
            "type": "string",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": -1,
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "trackOver",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
