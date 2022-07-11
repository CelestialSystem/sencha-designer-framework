xds.component.Registry.addDefinition({
    "type": "Ext.view.MultiSelector",
    "className": "Ext.view.MultiSelector",
    "classAlias": "widget.multiselector",
    "inherits": "Ext.grid.Panel",
    "autoName": "MyMultiSelector",
    "cfgs": [
        {
            "name": "addToolText",
            "type": "string",
            "defaultValue": "Search for items to add"
        },
        {
            "name": "fieldName",
            "type": "string",
            "defaultValue": "name"
        },
        {
            "name": "fieldTitle",
            "type": "string"
        },
        {
            "name": "removeRowText",
            "type": "string",
            "defaultValue": "✖"
        },
        {
            "name": "removeRowTip",
            "type": "string",
            "defaultValue": "Remove this item"
        },
        {
            "name": "search",
            "type": "object",
            "defaultValue": {
                "xtype": "multiselector-search",
                "width": 200,
                "height": 200,
                "store": {
                    "autoLoad": true
                }
            },
            "bindable": true
        }
    ]
});
