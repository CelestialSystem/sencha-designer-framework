xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.Settings",
    "className": "Ext.pivot.plugin.configurator.Settings",
    "classAlias": "widget.pivotsettings",
    "inherits": "Ext.form.Panel",
    "autoName": "MySettings",
    "cfgs": [
        {
            "name": "controller",
            "type": "string",
            "defaultValue": "pivotsettings",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "defaults",
            "type": "object",
            "defaultValue": {
                "xtype": "fieldset",
                "defaults": {
                    "labelAlign": "top"
                }
            },
            "bindable": true
        },
        {
            "name": "hideAnimation",
            "type": "string",
            "defaultValue": {
                "type": "slideOut",
                "duration": 250,
                "easing": "ease-in",
                "direction": "right"
            },
            "bindable": true
        },
        {
            "name": "listeners",
            "type": "object",
            "defaultValue": {
                "matrixpropertieschange": "onMatrixPropertiesChanged"
            },
            "bindable": true
        },
        {
            "name": "showAnimation",
            "type": "string",
            "defaultValue": {
                "type": "slideIn",
                "duration": 250,
                "easing": "ease-out",
                "direction": "left"
            },
            "bindable": true
        },
        {
            "name": "viewModel",
            "type": "string",
            "defaultValue": {
                "stores": {
                    "sLayout": {
                        "type": "pivotselect"
                    },
                    "sPositions": {
                        "type": "pivotselect"
                    },
                    "sYesNo": {
                        "type": "pivotselect"
                    }
                }
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
