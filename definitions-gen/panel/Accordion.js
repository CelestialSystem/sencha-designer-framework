xds.component.Registry.addDefinition({
    "type": "Ext.panel.Accordion",
    "className": "Ext.panel.Accordion",
    "classAlias": "widget.accordion",
    "inherits": "Ext.Panel",
    "autoName": "MyAccordion",
    
    "cfgs": [
        {
            "name": "defaultPanelUI",
            "type": "string",
            "defaultValue": 'accordion'
        },
        {
            "name": "expandedFirst",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "openable",
            "type": "number",
            "defalutValue": 1
        }
    ]
});
