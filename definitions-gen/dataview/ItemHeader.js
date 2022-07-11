xds.component.Registry.addDefinition({
    "type": "Ext.dataview.ItemHeader",
    "className": "Ext.dataview.ItemHeader",
    "classAlias": "widget.itemheader",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Toolable",
        "Ext.dataview.Pinnable"
    ],
    "autoName": "MyItemHeader",
    "cfgs": [
        {
            "name": "group",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "template",
            "bindable": true
        }
    ]
});
