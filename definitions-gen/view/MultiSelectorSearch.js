xds.component.Registry.addDefinition({
    "type": "Ext.view.MultiSelectorSearch",
    "className": "Ext.view.MultiSelectorSearch",
    "classAlias": "widget.multiselector-search",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyMultiSelectorSearch",
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "border",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "defaultListenerScope",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "field",
            "type": "string"
        },
        {
            "name": "floating",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "keyMap",
            "type": "object",
            "defaultValue": {
                "scope": "this",
                "ESC": "hide"
            },
            "bindable": true
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "fit",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "minHeight",
            "type": "number",
            "defaultValue": 200,
            "bindable": true
        },
        {
            "name": "minWidth",
            "type": "number",
            "defaultValue": 200,
            "bindable": true
        },
        {
            "name": "referenceHolder",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "searchText",
            "type": "string",
            "defaultValue": "Search..."
        },
        {
            "name": "store",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
