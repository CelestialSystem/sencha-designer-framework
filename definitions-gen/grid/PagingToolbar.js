xds.component.Registry.addDefinition({
    "type": "Ext.grid.PagingToolbar",
    "className": "Ext.grid.PagingToolbar",
    "classAlias": "widget.pagingtoolbar",
    "inherits": "Ext.Toolbar",
    "autoName": "MyPagingToolbar",
    "cfgs": [
        {
            "name": "nextButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "iconCls": "x-pagingtoolbar-next"
            },
            "bindable": true
        },
        {
            "name": "prevButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "iconCls": "x-pagingtoolbar-prev"
            },
            "bindable": true
        },
        {
            "name": "sliderField",
            "type": "object",
            "defaultValue": {
                "xtype": "singlesliderfield",
                "liveUpdate": true,
                "value": 1,
                "flex": 1,
                "minValue": 1
            },
            "bindable": true
        }
    ]
});
