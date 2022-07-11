xds.component.Registry.addDefinition({
    "type": "Ext.grid.menu.ShowInGroups",
    "className": "Ext.grid.menu.ShowInGroups",
    "classAlias": "widget.gridshowingroupsmenuitem",
    "inherits": "Ext.menu.CheckItem",
    "autoName": "MyShowInGroups",
    "cfgs": [
        {
            "name": "text",
            "type": "string",
            "defaultValue": "Show in groups",
            "bindable": true
        }
    ]
});
