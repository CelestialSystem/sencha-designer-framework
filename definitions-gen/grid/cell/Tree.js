xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Tree",
    "className": "Ext.grid.cell.Tree",
    "classAlias": "widget.treecell",
    "inherits": "Ext.grid.cell.Cell",
    "autoName": "MyTree",
    "cfgs": [
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
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "toolDefaults",
            "type": "object",
            "defaultValue": {
                "zone": "tail"
            },
            "bindable": true
        },
        {
            "name": "autoCheckChildren",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "checkable",
            "type": "boolean",
            "defaultValue": null
        },
        {
            "name": "checkableField",
            "type": "string",
            "defaultValue": 'checked'
        },
        {
            "name": "checkOnTriTap",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableTri",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
