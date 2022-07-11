xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.DrillDown",
    "className": "Ext.pivot.plugin.DrillDown",
    "classAlias": "plugin.pivotdrilldown",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyDrillDown",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 25,
            "bindable": true
        },
        {
            "name": "panel",
            "type": "object",
            "defaultValue": {
                "xtype": "panel",
                "hidden": true,
                "floated": true,
                "modal": true,
                "hideOnMaskTap": true,
                "right": 0,
                "height": "100%",
                "showAnimation": {
                    "type": "slideIn",
                    "duration": 250,
                    "easing": "ease-out",
                    "direction": "left"
                },
                "hideAnimation": {
                    "type": "slideOut",
                    "duration": 250,
                    "easing": "ease-in",
                    "direction": "right"
                },
                "layout": "fit",
                "items": [
                    {
                        "docked": "top",
                        "xtype": "titlebar",
                        "itemId": "title",
                        "items": {
                            "xtype": "button",
                            "text": "Done",
                            "ui": "action",
                            "align": "right",
                            "itemId": "done"
                        }
                    },
                    {
                        "xtype": "grid",
                        "itemId": "grid",
                        "plugins": {
                            "gridpagingtoolbar": true
                        }
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "remoteStore",
            "type": "object",
            "bindable": true
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "hidedrilldownpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
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
            "name": "showdrilldownpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
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
