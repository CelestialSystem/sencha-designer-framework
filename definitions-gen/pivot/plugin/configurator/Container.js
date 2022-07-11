xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Container",
    "className": "Ext.pivot.plugin.configurator.Container",
    "classAlias": "widget.pivotconfigcontainer",
    "inherits": "Ext.panel.Panel",
    "mixin": [
        "Ext.mixin.FocusableContainer"
    ],
    "autoName": "MyContainer",
    "cfgs": [
        {
            "name": "fieldType",
            "type": "string",
            "defaultValue": "all",
            "bindable": true
        }
    ]
});
