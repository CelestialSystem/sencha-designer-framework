xds.component.Registry.addDefinition({
    "type": "Ext.form.Label",
    "className": "Ext.form.Label",
    "classAlias": "widget.label",
    "inherits": "Ext.Component",
    "autoName": "MyLabel",
    "cfgs": [
        {
            "name": "forId",
            "type": "string"
        },
        {
            "name": "html",
            "type": "string",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
