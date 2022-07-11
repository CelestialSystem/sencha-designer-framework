xds.component.Registry.addDefinition({
    "type": "Ext.util.Collection",
    "className": "Ext.util.Collection",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyCollection",
    "cfgs": [
        {
            "name": "decoder",
            "type": "function",
            "bindable": true
        },
        {
            "name": "defaultSortDirection",
            "type": "string",
            "defaultValue": "ASC",
            "bindable": true
        },
        {
            "name": "extraKeys",
            "type": "object",
            "bindable": true
        },
        {
            "name": "filters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "grouper",
            "type": "object",
            "bindable": true
        },
        {
            "name": "groups",
            "type": "object",
            "bindable": true
        },
        {
            "name": "keyFn",
            "type": "function"
        },
        {
            "name": "multiSortLimit",
            "type": "number",
            "defaultValue": 3,
            "bindable": true
        },
        {
            "name": "rootProperty",
            "type": "string",
            "bindable": true
        },
        {
            "name": "sorters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "source",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "add",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
                    "optional": true
                },
                {
                    "name": "details",
                    "type": "Object",
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
            "name": "beforeitemchange",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
                    "optional": true
                },
                {
                    "name": "details",
                    "type": "Object",
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
            "name": "beginupdate",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
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
            "name": "endupdate",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
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
            "name": "itemchange",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
                    "optional": true
                },
                {
                    "name": "details",
                    "type": "Object",
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
                    "name": "collection",
                    "type": "Ext.util.Collection",
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
                    "name": "collection",
                    "type": "Ext.util.Collection",
                    "optional": true
                },
                {
                    "name": "details",
                    "type": "Object",
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
            "name": "sort",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
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
            "name": "updatekey",
            "params": [
                {
                    "name": "collection",
                    "type": "Ext.util.Collection",
                    "optional": true
                },
                {
                    "name": "details",
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
