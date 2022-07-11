xds.component.Registry.addDefinition({
    "type": "Ext.exporter.excel.PivotXlsx",
    "className": "Ext.exporter.excel.PivotXlsx",
    "classAlias": "exporter.pivotxlsx",
    "inherits": "Ext.exporter.Base",
    "autoName": "MyPivotXlsx",
    "cfgs": [
        {
            "name": "data",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "matrix",
            "type": "object",
            "bindable": true
        },
        {
            "name": "pivotTableStyle",
            "type": "object",
            "defaultValue": {
                "name": "PivotStyleMedium7"
            },
            "bindable": true
        },
        {
            "name": "titleStyle",
            "type": "object",
            "defaultValue": {
                "alignment": {
                    "horizontal": "Center",
                    "vertical": "Center"
                },
                "font": {
                    "fontName": "Arial",
                    "family": "Swiss",
                    "size": 18,
                    "color": "#1F497D"
                }
            },
            "bindable": true
        }
    ]
});
