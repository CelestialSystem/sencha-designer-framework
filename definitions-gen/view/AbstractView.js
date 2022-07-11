xds.component.Registry.addDefinition({
    "type": "Ext.view.AbstractView",
    "className": "Ext.view.AbstractView",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyAbstractView",
    "cfgs": [
        {
            "name": "blockRefresh",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "deferEmptyText",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "deferInitialRefresh",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "disableSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "emptyText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemCls",
            "type": "string",
            "defaultValue": "x-dataview-item"
        },
        {
            "name": "itemSelector",
            "type": "string"
        },
        {
            "name": "itemTpl",
            "type": "template"
        },
        {
            "name": "loadingCls",
            "type": "string"
        },
        {
            "name": "loadingHeight",
            "type": "number"
        },
        {
            "name": "loadingText",
            "type": "string",
            "defaultValue": "Loading..."
        },
        {
            "name": "loadMask",
            "type": "boolean",
            "defaultValue": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "overItemCls",
            "type": "string"
        },
        {
            "name": "preserveScrollOnRefresh",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "preserveScrollOnReload",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "selectedItemCls",
            "type": "string",
            "defaultValue": "x-item-selected"
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selectionModel",
            "type": "object",
            "defaultValue": {
                "type": "dataviewmodel"
            },
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "defaultValue": "ext-empty-store",
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "throttledUpdate",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tpl",
            "type": "template"
        },
        {
            "name": "trackOver",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "beforerefresh",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "itemadd",
            "params": [
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement[]",
                    "optional": true
                },
                {
                    "name": "view",
                    "type": "Ext.view.View",
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
            "name": "itemremove",
            "params": [
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement[]",
                    "optional": true
                },
                {
                    "name": "view",
                    "type": "Ext.view.View",
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
            "name": "itemupdate",
            "params": [
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "view",
                    "type": "Ext.view.View",
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
            "name": "refresh",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
            "name": "viewready",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.view.View",
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
