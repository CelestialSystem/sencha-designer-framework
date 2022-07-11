xds.component.Registry.addDefinition({
    "type": "Ext.exporter.excel.Xlsx",
    "className": "Ext.exporter.excel.Xlsx",
    "classAlias": "exporter.excel07",
    "inherits": "Ext.exporter.Base",
    "autoName": "MyXlsx",
    "typeAlias": [
        "Ext.exporter.Excel"
    ],
    "cfgs": [
        {
            "name": "defaultStyle",
            "type": "object",
            "defaultValue": {
                "alignment": {
                    "vertical": "Top"
                },
                "font": {
                    "fontName": "Arial",
                    "family": "Swiss",
                    "size": 11,
                    "color": "#000000"
                }
            },
            "bindable": true
        },
        {
            "name": "groupFooterStyle",
            "type": "object",
            "defaultValue": {
                "borders": [
                    {
                        "position": "Top",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "groupHeaderStyle",
            "type": "object",
            "defaultValue": {
                "borders": [
                    {
                        "position": "Bottom",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "tableHeaderStyle",
            "type": "object",
            "defaultValue": {
                "alignment": {
                    "horizontal": "Center",
                    "vertical": "Center"
                },
                "borders": [
                    {
                        "position": "Bottom",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    }
                ],
                "font": {
                    "fontName": "Arial",
                    "family": "Swiss",
                    "size": 11,
                    "color": "#1F497D"
                }
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
