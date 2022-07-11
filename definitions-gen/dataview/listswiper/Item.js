xds.component.Registry.addDefinition({
    "type": "Ext.dataview.listswiper.Item",
    "className": "Ext.dataview.listswiper.Item",
    "classAlias": "widget.listswiperitem",
    "inherits": "Ext.Container",
    "autoName": "MyItem",
    "cfgs": [
        {
            "name": "undo",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "text": "Undo",
                "touchAction": {
                    "panX": false,
                    "panY": false
                }
            },
            "bindable": true
        }
    ]
});
