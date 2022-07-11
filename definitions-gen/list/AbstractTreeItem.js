xds.component.Registry.addDefinition({
    "type": "Ext.list.AbstractTreeItem",
    "className": "Ext.list.AbstractTreeItem",
    "inherits": "Ext.Widget",
    "autoName": "MyAbstractTreeItem",
    "cfgs": [
        {
            "name": "expandable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "expanded",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconClsProperty",
            "type": "string",
            "defaultValue": "iconCls",
            "bindable": true
        },
        {
            "name": "leaf",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "loading",
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
            "name": "over",
            "type": "number",
            "bindable": true
        },
        {
            "name": "owner",
            "type": "object",
            "bindable": true
        },
        {
            "name": "parentItem",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selected",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "selectedParent",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "textProperty",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        }
    ]
});
