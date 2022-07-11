xds.component.Registry.addDefinition({
    "type": "Ext.pivot.dimension.Item",
    "className": "Ext.pivot.dimension.Item",
    "inherits": "Ext.Base",
    "autoName": "MyItem",
    "typeAlias": [
        "Mz.aggregate.dimension.Item"
    ],
    "cfgs": [
        {
            "name": "aggregator",
            "type": "string",
            "defaultValue": "sum",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "align",
            "type": "string",
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "blankText",
            "type": "string",
            "defaultValue": "(blank)",
            "bindable": true
        },
        {
            "name": "caseSensitiveSort",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "column",
            "type": "object",
            "bindable": true
        },
        {
            "name": "dataIndex",
            "type": "string",
            "bindable": true
        },
        {
            "name": "direction",
            "type": "string",
            "editor": "options",
            "options": [
                "ASC",
                "DESC"
            ],
            "defaultValue": "ASC",
            "bindable": true
        },
        {
            "name": "exportStyle",
            "type": "object",
            "bindable": true
        },
        {
            "name": "filter",
            "type": "object",
            "bindable": true
        },
        {
            "name": "flex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "formatter",
            "type": "string",
            "bindable": true
        },
        {
            "name": "grouperFn",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                }
            ]
        },
        {
            "name": "header",
            "type": "string",
            "bindable": true
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "labelRenderer",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function",
                    "params": [
                        {
                            "name": "value",
                            "type": "Mixed"
                        }
                    ]
                }
            ]
        },
        {
            "name": "renderer",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "showZeroAsBlank",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "sorterFn",
            "type": "function",
            "bindable": true
        },
        {
            "name": "sortIndex",
            "type": "string",
            "bindable": true
        },
        {
            "name": "values",
            "type": "object",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        }
    ]
});
