xds.component.Registry.addDefinition({
    "type": "Ext.chart.navigator.Navigator",
    "className": "Ext.chart.navigator.Navigator",
    "inherits": "Ext.chart.navigator.NavigatorBase",
    "autoName": "MyNavigator",
    "cfgs": [
        {
            "name": "axes",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "axis",
            "type": "string",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "flipXY",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "height",
            "type": "number",
            "defaultValue": 75,
            "bindable": true
        },
        {
            "name": "highlightItem",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "innerPadding",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "insetPadding",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "interactions",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "legend",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "maximum",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "minimum",
            "type": "number",
            "defaultValue": 0.8,
            "bindable": true
        },
        {
            "name": "series",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "span",
            "type": "string",
            "editor": "options",
            "options": [
                "chart",
                "series"
            ],
            "defaultValue": "series",
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "theme",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "thumbGap",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        },
        {
            "name": "tolerance",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        }
    ]
});
