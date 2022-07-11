xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.Editable",
    "className": "Ext.grid.plugin.Editable",
    "classAlias": "plugin.grideditable",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyEditable",
    "cfgs": [
        {
            "name": "defaultFormConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "formpanel",
                "scrollable": true,
                "items": [
                    {
                        "xtype": "fieldset"
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "enableDeleteButton",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "formConfig",
            "type": "object",
            "bindable": true
        },
        {
            "name": "toolbarConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "titlebar",
                "docked": "top",
                "items": [
                    {
                        "xtype": "button",
                        "ui": "alt",
                        "text": "Cancel",
                        "align": "left",
                        "action": "cancel"
                    },
                    {
                        "xtype": "button",
                        "ui": "alt",
                        "text": "Submit",
                        "align": "right",
                        "action": "submit"
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "defaultValue": "childdoubletap",
            "bindable": true
        }
    ]
});
