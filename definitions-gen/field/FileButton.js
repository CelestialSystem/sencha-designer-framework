xds.component.Registry.addDefinition({
    "type": "Ext.field.FileButton",
    "className": "Ext.field.FileButton",
    "classAlias": "widget.filebutton",
    "inherits": "Ext.Button",
    "autoName": "MyFileButton",
    "cfgs": [
        {
            "name": "accept",
            "type": "string",
            "bindable": true
        },
        {
            "name": "capture",
            "type": "string",
            "bindable": true
        },
        {
            "name": "multiple",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "value",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "filebutton",
                    "type": "Ext.field.FileButton",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
