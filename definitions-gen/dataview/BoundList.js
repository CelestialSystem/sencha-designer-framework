xds.component.Registry.addDefinition({
    "type": "Ext.dataview.BoundList",
    "className": "Ext.dataview.BoundList",
    "classAlias": "widget.boundlist",
    "inherits": "Ext.dataview.List",
    "autoName": "MyBoundList",
    "cfgs": [
        {
            "name": "triggerEvent",
            "type": "string",
            "editor": "options",
            "options": [
                "tap"
            ],
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
