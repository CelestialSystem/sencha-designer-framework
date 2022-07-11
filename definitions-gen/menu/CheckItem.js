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
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "checked",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "checkHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "This",
                    "type": "Ext.menu.CheckItem"
                },
                {
                    "name": "checked",
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
            "type": "object",
            "bindable": true
        },
        {
            "name": "submenuText",
            "type": "string",
            "defaultValue": "{0} submenu"
        },
        {
            "name": "value",
            "type": "string",
            "bindable": true
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
