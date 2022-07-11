xds.component.Registry.addDefinition({
    "type": "Ext.menu.Menu",
    "className": "Ext.menu.Menu",
    "classAlias": "widget.menu",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyMenu",
    "cfgs": [
        {
            "name": "allowOtherMenus",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "defaultAlign",
            "type": "string",
            "defaultValue": "tl-bl?"
        },
        {
            "name": "floating",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "focusOnToFront",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "ignoreParentClicks",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "minWidth",
            "type": "number",
            "defaultValue": 120,
            "bindable": true
        },
        {
            "name": "mouseLeaveDelay",
            "type": "number",
            "defaultValue": 50
        },
        {
            "name": "plain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "showSeparator",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "click",
            "params": [
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Ext.Component",
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
            "name": "mouseenter",
            "params": [
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
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
            "name": "mouseleave",
            "params": [
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
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
            "name": "mouseover",
            "params": [
                {
                    "name": "menu",
                    "type": "Ext.menu.Menu",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Ext.Component",
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
        }
    ]
});
