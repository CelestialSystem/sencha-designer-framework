xds.component.Registry.addDefinition({
    "type": "Ext.Progress",
    "className": "Ext.Progress",
    "classAlias": "widget.progress",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.ProgressBase"
    ],
    "autoName": "MyProgress",
    "typeAlias": [
        "Ext.ProgressBarWidget"
    ],
    "cfgs": [
        {
            "name": "animate",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
