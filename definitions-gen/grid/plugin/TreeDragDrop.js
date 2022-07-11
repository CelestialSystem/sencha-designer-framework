xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.TreeDragDrop",
    "className": "Ext.grid.plugin.TreeDragDrop",
    "autoName": "MyTreeDragDrop",
    "classAlias": "plugin.treedragdrop",
    "inherits": "Ext.plugin.dd.DragDrop",
    "autoName": "MyTreeDragDrop",

    "cfgs": [{
        "name": "dragText",
        "type": "string",
        "defaultValue": "{0} selected node{1}"
    },
    {
        "name": "expandDelay",
        "type": "number",
        "defaultValue": 1000
    },
    {
        "name": "allowExpandOnHover",
        "type": "boolean",
        "defaultValue": true
    }]
});
