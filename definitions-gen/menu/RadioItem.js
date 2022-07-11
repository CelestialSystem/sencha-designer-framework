xds.component.Registry.addDefinition({
    "type": "Ext.menu.RadioItem",
    "className": "Ext.menu.RadioItem",
    "classAlias": "widget.menuradioitem",
    "inherits": "Ext.menu.CheckItem",
    "autoName": "MyRadioItem",
    "cfgs": [
        {
            "name": "allowUncheck",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "group",
            "type": "string",
            "bindable": true
        },
        {
            "name": "name",
            "type": "string"
        }
    ]
});
