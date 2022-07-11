xds.component.Registry.addDefinition({
    "type": "Ext.dataview.ListItem",
    "className": "Ext.dataview.ListItem",
    "classAlias": "widget.listitem",
    "inherits": "Ext.dataview.DataItem",
    "mixin": [
        "Ext.dataview.Disclosable",
        "Ext.mixin.Toolable",
        "Ext.dataview.Pinnable"
    ],
    "autoName": "MyListItem",
    "typeAlias": [
        "Ext.dataview.component.ListItem"
    ]
});
