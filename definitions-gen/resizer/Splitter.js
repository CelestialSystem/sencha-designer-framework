xds.component.Registry.addDefinition({
    "type": "Ext.resizer.Splitter",
    "className": "Ext.resizer.Splitter",
    "classAlias": "widget.splitter",
    "inherits": "Ext.Component",
    "autoName": "MySplitter",
    "cfgs": [
        {
            "name": "collapsedCls",
            "type": "string"
        },
        {
            "name": "collapseOnDblClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "collapseTarget",
            "type": "string",
            "defaultValue": "next"
        },
        {
            "name": "collapsible",
            "type": "boolean"
        },
        {
            "name": "defaultSplitMax",
            "type": "number",
            "defaultValue": 1000
        },
        {
            "name": "defaultSplitMin",
            "type": "number",
            "defaultValue": 40
        },
        {
            "name": "performCollapse",
            "type": "boolean"
        },
        {
            "name": "size",
            "type": "number",
            "defaultValue": 5,
            "bindable": true
        },
        {
            "name": "tracker",
            "type": "object"
        }
    ]
});
