xds.component.Registry.addDefinition({
    "type": "Ext.data.NodeStore",
    "className": "Ext.data.NodeStore",
    "classAlias": "store.node",
    "inherits": "Ext.data.Store",
    "autoName": "MyNodeStore",
    "cfgs": [
        {
            "name": "folderSort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "node",
            "type": "object",
            "bindable": true
        },
        {
            "name": "recursive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "rootVisible",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
