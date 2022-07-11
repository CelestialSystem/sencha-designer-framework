xds.component.Registry.addDefinition({
    "type": "Ext.grid.menu.GroupByThis",
    "className": "Ext.grid.menu.GroupByThis",
    "classAlias": "widget.gridgroupbythismenuitem",
    "inherits": "Ext.menu.Item",
    "autoName": "MyGroupByThis",
    "cfgs": [
        {
            "name": "text",
            "type": "string",
            "defaultValue": "Group by this field",
            "bindable": true
        }
    ]
});
