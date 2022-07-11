xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.RowWidget",
    "className": "Ext.grid.plugin.RowWidget",
    "classAlias": "plugin.rowwidget",
    "inherits": "Ext.grid.plugin.RowExpander",
    "mixin": [
        "Ext.mixin.Identifiable",
        "Ext.mixin.StyleCacher"
    ],
    "autoName": "MyRowWidget",
    "cfgs": [
        {
            "name": "defaultWidgetUI",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "lockedWidget",
            "type": "object"
        },
        {
            "name": "widget",
            "type": "object"
        }
    ]
});
