xds.component.Registry.addDefinition({
    "type": "Ext.exporter.text.Html",
    "className": "Ext.exporter.text.Html",
    "classAlias": "exporter.html",
    "inherits": "Ext.exporter.Base",
    "autoName": "MyHtml",
    "cfgs": [
        {
            "name": "defaultStyle",
            "type": "object",
            "defaultValue": {
                "name": "table tbody td, table thead th",
                "alignment": {
                    "vertical": "Top"
                },
                "font": {
                    "fontName": "Arial",
                    "size": 12,
                    "color": "#000000"
                },
                "borders": [
                    {
                        "position": "Left",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    },
                    {
                        "position": "Right",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    }
                ]
            },
            "bindable": true
        },
        {
            "name": "groupFooterStyle",
            "type": "object",
            "defaultValue": {
                "name": ".groupFooter td",
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
            "name": "groupHeaderStyle",
            "type": "object",
            "defaultValue": {
                "name": ".groupHeader td",
                "borders": [
                    {
                        "position": "Top",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    },
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
            "name": "tableFooterStyle",
            "type": "object",
            "defaultValue": {
                "name": "table tfoot th",
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
            "name": "tableHeaderStyle",
            "type": "object",
            "defaultValue": {
                "name": "table thead th",
                "alignment": {
                    "horizontal": "Center",
                    "vertical": "Center"
                },
                "borders": [
                    {
                        "position": "Top",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    },
                    {
                        "position": "Bottom",
                        "lineStyle": "Continuous",
                        "weight": 1,
                        "color": "#4F81BD"
                    }
                ],
                "font": {
                    "fontName": "Arial",
                    "size": 12,
                    "color": "#1F497D"
                }
            },
            "bindable": true
        },
        {
            "name": "titleStyle",
            "type": "object",
            "defaultValue": {
                "name": "h1",
                "font": {
                    "fontName": "Arial",
                    "size": 18,
                    "color": "#1F497D"
                }
            },
            "bindable": true
        }
    ]
});
