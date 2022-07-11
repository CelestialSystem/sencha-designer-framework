xds.component.Registry.addDefinition({
    "type": "Ext.ux.Explorer",
    "className": "Ext.ux.Explorer",
    "classAlias": "widget.explorer",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyExplorer",
    "cfgs": [
        {
            "name": "breadcrumb",
            "type": "object",
            "defaultValue": {
                "dock": "top",
                "xtype": "breadcrumb",
                "reference": "breadcrumb"
            },
            "bindable": true
        },
        {
            "name": "contentView",
            "type": "object",
            "defaultValue": {
                "xtype": "dataview",
                "reference": "contentView",
                "region": "center",
                "cls": "x-explorer-view",
                "itemSelector": ".x-explorer-item",
                "tpl": "<tpl for=\".\"><div class=\"x-explorer-item\"><div class=\"{iconCls}\"><div class=\"x-explorer-node-icon{[values.leaf ? \" x-explorer-leaf-icon\" : \"\"]}\"></div><div class=\"x-explorer-item-text\">{text}</div></div></div></tpl>"
            },
            "bindable": true
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tree",
            "type": "object",
            "defaultValue": {
                "xtype": "treepanel",
                "reference": "tree",
                "region": "west",
                "width": 200
            },
            "bindable": true
        }
    ]
});
