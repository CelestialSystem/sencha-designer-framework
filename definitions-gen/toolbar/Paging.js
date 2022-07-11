xds.component.Registry.addDefinition({
    "type": "Ext.toolbar.Paging",
    "className": "Ext.toolbar.Paging",
    "classAlias": "widget.pagingtoolbar",
    "inherits": "Ext.toolbar.Toolbar",
    "mixin": [
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyPaging",
    "typeAlias": [
        "Ext.PagingToolbar"
    ],
    "cfgs": [
        {
            "name": "afterPageText",
            "type": "string",
            "defaultValue": "of {0}"
        },
        {
            "name": "beforePageText",
            "type": "string",
            "defaultValue": "Page"
        },
        {
            "name": "displayInfo",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "displayMsg",
            "type": "string",
            "defaultValue": "Displaying {0} - {1} of {2}"
        },
        {
            "name": "emptyMsg",
            "type": "string",
            "defaultValue": "No data to display"
        },
        {
            "name": "firstText",
            "type": "string",
            "defaultValue": "First Page"
        },
        {
            "name": "inputItemWidth",
            "type": "number",
            "defaultValue": 30
        },
        {
            "name": "lastText",
            "type": "string",
            "defaultValue": "Last Page"
        },
        {
            "name": "nextText",
            "type": "string",
            "defaultValue": "Next Page"
        },
        {
            "name": "prependButtons",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "prevText",
            "type": "string",
            "defaultValue": "Previous Page"
        },
        {
            "name": "refreshText",
            "type": "string",
            "defaultValue": "Refresh"
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "beforechange",
            "params": [
                {
                    "name": "pagingtoolbar",
                    "type": "Ext.toolbar.Paging",
                    "optional": true
                },
                {
                    "name": "page",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "change",
            "params": [
                {
                    "name": "pagingtoolbar",
                    "type": "Ext.toolbar.Paging",
                    "optional": true
                },
                {
                    "name": "pageData",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
