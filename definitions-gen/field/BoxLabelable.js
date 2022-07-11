xds.component.Registry.addDefinition({
    "type": "Ext.field.BoxLabelable",
    "className": "Ext.field.BoxLabelable",
    "inherits": "Ext.Mixin",
    "autoName": "MyBoxLabelable",
    "cfgs": [
        {
            "name": "boxLabel",
            "type": "string",
            "bindable": true
        },
        {
            "name": "boxLabelAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "after",
                "before"
            ],
            "defaultValue": "after",
            "bindable": true
        }
    ]
});
