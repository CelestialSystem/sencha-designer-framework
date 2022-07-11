xds.component.Registry.addDefinition({
    "type": "Ext.dashboard.Dashboard",
    "className": "Ext.dashboard.Dashboard",
    "classAlias": "widget.dashboard",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyDashboard",
    "cfgs": [
        {
            "name": "columnWidths",
            "type": "array"
        },
        {
            "name": "defaultContent",
            "type": "array"
        },
        {
            "name": "maxColumns",
            "type": "number",
            "defaultValue": 4,
            "bindable": true
        },
        {
            "name": "parts",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforedragover",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "beforedrop",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragover",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "drop",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "validatedrop",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
