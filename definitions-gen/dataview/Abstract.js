xds.component.Registry.addDefinition({
    "type": "Ext.dataview.Abstract",
    "className": "Ext.dataview.Abstract",
    "inherits": "Ext.Container",
    "mixin": [
        "Ext.mixin.ConfigProxy",
        "Ext.mixin.ItemRippler"
    ],
    "autoName": "MyAbstract",
    "cfgs": [
        {
            "name": "associatedData",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "autoSize",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "data",
            "type": "object",
            "bindable": true
        },
        {
            "name": "deferEmptyText",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "deselectOnContainerClick",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "disableSelection",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "emptyItemText",
            "type": "string",
            "defaultValue": "\\xa0",
            "bindable": true
        },
        {
            "name": "emptyText",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "emptyTextDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "emptytext"
            },
            "bindable": true
        },
        {
            "name": "emptyTextProperty",
            "type": "string",
            "defaultValue": "html"
        },
        {
            "name": "inline",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "itemButtonMode",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "itemCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemTpl",
            "type": "template",
            "defaultValue": "<div>{text:htmlEncode}</div>",
            "bindable": true
        },
        {
            "name": "loadingHeight",
            "type": "number",
            "bindable": true
        },
        {
            "name": "loadingText",
            "type": "string",
            "defaultValue": "Loading...",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "markDirty",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "pressedDelay",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scrollable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scrollDock",
            "type": "string",
            "editor": "options",
            "options": [
                "emd",
                "start"
            ]
        },
        {
            "name": "scrollToTopOnRefresh",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "selectable",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "selection",
            "type": "object"
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "triggerCtEvent",
            "type": "string",
            "editor": "options",
            "options": [
                "singletap",
                "tap"
            ],
            "defaultValue": "tap",
            "bindable": true
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "editor": "options",
            "options": [
                "childdoubletap",
                "childlongpress",
                "childsingletap",
                "childswipe",
                "childtap",
                "childtaphold"
            ],
            "defaultValue": "childtap",
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
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
            "name": "add",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "deselect",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
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
            "name": "move",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "navigate",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
                    "optional": true
                },
                {
                    "name": "to",
                    "type": "Ext.dataview.Location",
                    "optional": true
                },
                {
                    "name": "from",
                    "type": "Ext.dataview.Location",
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
                    "type": "Ext.dataview.DataView",
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
            "name": "remove",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "select",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
                    "optional": true
                },
                {
                    "name": "selected",
                    "type": "Ext.data.Model/Ext.data.Model[]",
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
            "name": "beforestorechange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.dataview.Abstract",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Ext.data.Store/Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Ext.data.Store/Object",
                    "optional": true
                },
                {
                    "type": "Boolean",
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
            "name": "storechange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.dataview.Abstract",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Ext.data.Store/Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Ext.data.Store/Object",
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
