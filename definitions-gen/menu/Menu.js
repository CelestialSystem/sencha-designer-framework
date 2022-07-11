xds.component.Registry.addDefinition({
    "type": "Ext.menu.Menu",
    "className": "Ext.menu.Menu",
    "classAlias": "widget.menu",
    "inherits": "Ext.Panel",
    "autoName": "MyMenu",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "tl-bl?",
            "bindable": true
        },
        {
            "name": "allowOtherMenus",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "autoHide",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "groups",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ignoreParentClicks",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "indented",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "mouseLeaveDelay",
            "type": "number",
            "defaultValue": 50
        },
        {
            "name": "separator",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "groupchange",
            "params": [
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "groupName",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Object",
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
