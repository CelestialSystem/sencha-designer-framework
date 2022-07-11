xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Container",
    "className": "Ext.pivot.plugin.configurator.Container",
    "classAlias": "widget.pivotconfigcontainer",
    "inherits": "Ext.Panel",
    "autoName": "MyContainer",
    "cfgs": [
        {
            "name": "fieldType",
            "type": "object",
            "defaultValue": "all",
            "bindable": true
        }
    ]
});
