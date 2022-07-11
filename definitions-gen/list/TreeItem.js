xds.component.Registry.addDefinition({
    "type": "Ext.list.TreeItem",
    "className": "Ext.list.TreeItem",
    "classAlias": "widget.treelistitem",
    "inherits": "Ext.list.AbstractTreeItem",
    "autoName": "MyTreeItem",
    "cfgs": [
        {
            "name": "rowCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "rowClsProperty",
            "type": "string",
            "defaultValue": "rowCls"
        }
    ]
});
