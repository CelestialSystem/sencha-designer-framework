xds.component.Registry.addDefinition({
    "type": "Ext.dataview.ListCollapser",
    "className": "Ext.dataview.ListCollapser",
    "autoName": "MyListCollapser",
    "cfgs": [
        {
            "name": "collapsed",
            "type": "boolean",
            "defaultValue": null
        },
        {
            "name": "collapseToolText",
            "type": "string",
            "defaultValue": 'Collapse this group'
        },
        {
            "name": "expandToolText",
            "type": "string",
            "defaultValue": 'Expand this group'
        },
        {
            "name": "footer",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tool",
            "type": "object",
            "defaultValue": {
                "xtype": 'tool',
                "type": 'collapse',
                "handler": 'up.onToggleCollapse',
                "itemId": 'groupCollapser',
                "weight": 900,
                "zone": 'end'
            }
        }
    ]
});
