xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.DrillDown",
    "className": "Ext.pivot.plugin.DrillDown",
    "classAlias": "plugin.pivotdrilldown",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyDrillDown",
    "typeAlias": [
        "Mz.pivot.plugin.DrillDown"
    ],
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "height",
            "type": "number",
            "defaultValue": 300,
            "bindable": true
        },
        {
            "name": "remoteStore",
            "type": "object",
            "bindable": true
        },
        {
            "name": "textWindow",
            "type": "string",
            "defaultValue": "Drill down window"
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 400,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "hidedrilldownpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.window.Window",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "showdrilldownpanel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.window.Window",
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
