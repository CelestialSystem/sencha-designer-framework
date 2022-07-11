xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.ViewOptions",
    "className": "Ext.grid.plugin.ViewOptions",
    "classAlias": "plugin.gridviewoptions",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyViewOptions",
    "cfgs": [
        {
            "name": "columnList",
            "type": "object",
            "defaultValue": {
                "xtype": "nestedlist",
                "title": "Columns",
                "clearSelectionOnListChange": false,
                "listConfig": {
                    "triggerEvent": null,
                    "infinite": true,
                    "mode": "MULTI",
                    "variableHeights": true,
                    "plugins": {
                        "sortablelist": {
                            "source": {
                                "handle": ".x-column-options-sortablehandle"
                            }
                        }
                    },
                    "itemConfig": {
                        "xtype": "viewoptionslistitem"
                    },
                    "itemTpl": "{text}"
                },
                "store": {
                    "type": "tree",
                    "fields": [
                        "id",
                        "text",
                        "dataIndex",
                        "header",
                        "hidden",
                        "hideable",
                        "grouped",
                        "groupable"
                    ],
                    "root": {
                        "text": "Columns"
                    }
                }
            },
            "bindable": true
        },
        {
            "name": "groupIndicatorSelector",
            "type": "object",
            "defaultValue": ".x-column-options-groupindicator",
            "bindable": true
        },
        {
            "name": "sheet",
            "type": "object",
            "defaultValue": {
                "xtype": "sheet",
                "cls": "x-gridviewoptions",
                "items": [
                    {
                        "docked": "top",
                        "xtype": "titlebar",
                        "title": "Customize",
                        "items": [
                            {
                                "xtype": "button",
                                "text": "Done",
                                "ui": "action",
                                "align": "right",
                                "role": "donebutton"
                            }
                        ]
                    }
                ],
                "hidden": true,
                "hideOnMaskTap": true,
                "enter": "right",
                "exit": "right",
                "modal": true,
                "right": 0,
                "layout": "fit",
                "stretchY": true
            },
            "bindable": true
        },
        {
            "name": "sheetWidth",
            "type": "object",
            "defaultValue": 320,
            "bindable": true
        },
        {
            "name": "visibleIndicatorSelector",
            "type": "object",
            "defaultValue": ".x-column-options-visibleindicator",
            "bindable": true
        }
    ]
});
