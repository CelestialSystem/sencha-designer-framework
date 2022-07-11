xds.component.Registry.addDefinition({
    "type": "Ext.grid.rowedit.Bar",
    "className": "Ext.grid.rowedit.Bar",
    "classAlias": "widget.roweditorbar",
    "inherits": "Ext.Panel",
    "autoName": "MyRowEditBar",
    "mixin": [
        'Ext.mixin.Bufferable'
    ],
    "cfgs": [
        {
            "name": "active",
            "type": "boolean",
            "defaultValue": null
        },
        {
            "name": "defaultCellUI",
            "type": "object",
            "defaultValue": null
        },
        {
            "name": "grid",
            "type": "object",
            "defaultValue": null
        }
    ]
});
