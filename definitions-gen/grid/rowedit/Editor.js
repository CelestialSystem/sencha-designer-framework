xds.component.Registry.addDefinition({
    "type": "Ext.grid.rowedit.Editor",
    "className": "Ext.grid.rowedit.Editor",
    "classAlias": "widget.roweditor",
    "inherits": "Ext.dataview.ListItem",
    "autoName": "MyRowEditEditor",
    "mixin": [
        'Ext.mixin.StoreWatcher'
    ],
    "cfgs": [
        {
            "name": "buttonContainer",
            "type": "object",
            "defaultValue": {
                "xtype": 'panel',
                "ui": 'roweditor-buttons',
                "alignSelf": 'center',
                "border": true,
                "bodyBorder": false,
                "defaultType": 'button',
                "top": 40,  // dynamically set
                "weighted": true,
                "layout": {
                    "type": 'hbox',
                    "align": 'center'
                }
            }
        },
        {
            "name": "minButtonWidth",
            "type": "string",
            "defaultValue": null
        }
    ]
});
