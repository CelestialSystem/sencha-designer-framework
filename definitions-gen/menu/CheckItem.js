xds.component.Registry.addDefinition({
    "type": "Ext.menu.CheckItem",
    "className": "Ext.menu.CheckItem",
    "classAlias": "widget.menucheckitem",
    "inherits": "Ext.menu.Item",
    "autoName": "MyCheckItem",
    "cfgs": [
        {
            "name": "checkChangeDisabled",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "checked",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "checkedCls",
            "type": "string",
            "defaultValue": "x-menu-item-checked"
        },
        {
            "name": "checkHandler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "group",
            "type": "string"
        },
        {
            "name": "groupCls",
            "type": "string",
            "defaultValue": "x-menu-group-icon"
        },
        {
            "name": "hideOnClick",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": "checked",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "submenuText",
            "type": "string",
            "defaultValue": "{0} submenu"
        },
        {
            "name": "uncheckedCls",
            "type": "string",
            "defaultValue": "x-menu-item-unchecked"
        }
    ],
    "eventDefs": [
        {
            "name": "beforecheckchange",
            "params": [
                {
                    "name": "menucheckitem",
                    "type": "Ext.menu.CheckItem",
                    "optional": true
                },
                {
                    "name": "checked",
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
            "name": "checkchange",
            "params": [
                {
                    "name": "menucheckitem",
                    "type": "Ext.menu.CheckItem",
                    "optional": true
                },
                {
                    "name": "checked",
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
