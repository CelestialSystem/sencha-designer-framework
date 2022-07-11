xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Column",
    "className": "Ext.pivot.plugin.configurator.Column",
    "classAlias": "widget.pivotconfigfield",
    "inherits": "Ext.Component",
    "autoName": "MyColumn",
    "cfgs": [
        {
            "name": "field",
            "type": "object",
            "bindable": true
        },
        {
            "name": "fieldType",
            "type": "string",
            "defaultValue": "all",
            "bindable": true
        }
    ]
});
