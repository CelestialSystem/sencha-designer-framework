xds.component.Registry.addDefinition({
    "type": "Ext.dataview.DataItem",
    "className": "Ext.dataview.DataItem",
    "classAlias": "widget.dataitem",
    "inherits": "Ext.Container",
    "mixin": [
        "Ext.dataview.GenericItem"
    ],
    "autoName": "MyDataItem",
    "typeAlias": [
        "Ext.dataview.component.DataItem"
    ],
    "cfgs": [
        {
            "name": "dataMap",
            "type": "object",
            "bindable": true
        },
        {
            "name": "itemCls",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "updatedata",
            "params": [
                {
                    "name": "dataItem",
                    "type": "Ext.dataview.DataItem",
                    "optional": true
                },
                {
                    "name": "newData",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
