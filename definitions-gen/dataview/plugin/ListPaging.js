xds.component.Registry.addDefinition({
    "type": "Ext.dataview.plugin.ListPaging",
    "className": "Ext.dataview.plugin.ListPaging",
    "classAlias": "plugin.listpaging",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyListPaging",
    "typeAlias": [
        "Ext.plugin.ListPaging"
    ],
    "cfgs": [
        {
            "name": "autoPaging",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "bufferZone",
            "type": "number",
            "defaultValue": 8,
            "bindable": true
        },
        {
            "name": "loadMoreText",
            "type": "string",
            "defaultValue": "Load More...",
            "bindable": true
        },
        {
            "name": "noMoreRecordsText",
            "type": "string",
            "defaultValue": "No More Records",
            "bindable": true
        }
    ]
});
