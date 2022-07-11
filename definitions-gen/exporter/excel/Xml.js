xds.component.Registry.addDefinition({
    "type": "Ext.exporter.excel.Xml",
    "className": "Ext.exporter.excel.Xml",
    "classAlias": "exporter.excel03",
    "inherits": "Ext.exporter.Base",
    "autoName": "MyXml",
    "cfgs": [
        {
            "name": "defaultStyle",
            "type": "object",
            "defaultValue": {
                "alignment": {
                    "vertical": "Top"
                },
                "font": {
                    "fontName": "Calibri",
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
                "name": "Group Header",
                "parentId": "Default",
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
            "name": "protectStructure",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "protectWindows",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "tableHeaderStyle",
            "type": "object",
            "defaultValue": {
                "name": "Heading 1",
                "parentId": "Default",
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
                    "fontName": "Calibri",
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
                "name": "Title",
                "parentId": "Default",
                "alignment": {
                    "horizontal": "Center",
                    "vertical": "Center"
                },
                "font": {
                    "fontName": "Cambria",
                    "family": "Swiss",
                    "size": 18,
                    "color": "#1F497D"
                }
            },
            "bindable": true
        },
        {
            "name": "windowHeight",
            "type": "number",
            "defaultValue": 9000,
            "bindable": true
        },
        {
            "name": "windowWidth",
            "type": "number",
            "defaultValue": 50000,
            "bindable": true
        }
    ]
});
