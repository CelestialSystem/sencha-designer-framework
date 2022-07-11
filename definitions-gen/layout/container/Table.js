xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Table",
    "className": "Ext.layout.container.Table",
    "classAlias": "layout.table",
    "inherits": "Ext.layout.container.Container",
    "autoName": "MyTable",
    "typeAlias": [
        "Ext.layout.TableLayout"
    ],
    "cfgs": [
        {
            "name": "columns",
            "type": "number"
        },
        {
            "name": "tableAttrs",
            "type": "object"
        },
        {
            "name": "tdAttrs",
            "type": "object"
        },
        {
            "name": "trAttrs",
            "type": "object"
        }
    ]
});
