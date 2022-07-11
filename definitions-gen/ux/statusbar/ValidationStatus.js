xds.component.Registry.addDefinition({
    "type": "Ext.ux.statusbar.ValidationStatus",
    "className": "Ext.ux.statusbar.ValidationStatus",
    "classAlias": "plugin.validationstatus",
    "inherits": "Ext.Component",
    "autoName": "MyValidationStatus",
    "cfgs": [
        {
            "name": "errorIconCls",
            "type": "string",
            "defaultValue": "x-status-error"
        },
        {
            "name": "errorListCls",
            "type": "string",
            "defaultValue": "x-status-error-list"
        },
        {
            "name": "hideText",
            "type": "string",
            "defaultValue": "Click again to hide the error list"
        },
        {
            "name": "showText",
            "type": "string",
            "defaultValue": "The form has errors (click for details...)"
        },
        {
            "name": "submitText",
            "type": "string",
            "defaultValue": "Saving..."
        },
        {
            "name": "validIconCls",
            "type": "string",
            "defaultValue": "x-status-valid"
        }
    ]
});
