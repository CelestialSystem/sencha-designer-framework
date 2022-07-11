xds.component.Registry.addDefinition({
    "type": "Ext.layout.Accordion",
    "className": "Ext.layout.Accordion",
    "classAlias": "layout.accordion",
    "inherits": "Ext.layout.container.VBox",
    "autoName": "MyAccordion",
    "typeAlias": [
        "Ext.layout.AccordionLayout"
    ],
    "cfgs": [
        {
            "name": "activeOnTop",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "animate",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "collapseFirst",
            "type": "boolean"
        },
        {
            "name": "fill",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "hideCollapseTool",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "multi",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "titleCollapse",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "wrapOver",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
