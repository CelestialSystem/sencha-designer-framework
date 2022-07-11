xds.component.Registry.addDefinition({
    "type": "Ext.ux.BoxReorderer",
    "className": "Ext.ux.BoxReorderer",
    "classAlias": "plugin.boxreorderer",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyBoxReorderer",
    "cfgs": [
        {
            "name": "animate",
            "type": "object",
            "defaultValue": 100
        },
        {
            "name": "itemSelector",
            "type": "string",
            "defaultValue": ".x-box-item"
        }
    ],
    "eventDefs": [
        {
            "name": "ChangeIndex",
            "params": [
                {
                    "name": "boxreorderer",
                    "type": "Ext.ux.BoxReorderer",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "dragCmp",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "startIdx",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "idx",
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
            "name": "Drag",
            "params": [
                {
                    "name": "boxreorderer",
                    "type": "Ext.ux.BoxReorderer",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "dragCmp",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "startIdx",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "idx",
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
            "name": "Drop",
            "params": [
                {
                    "name": "boxreorderer",
                    "type": "Ext.ux.BoxReorderer",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "dragCmp",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "startIdx",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "idx",
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
            "name": "StartDrag",
            "params": [
                {
                    "name": "boxreorderer",
                    "type": "Ext.ux.BoxReorderer",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "dragCmp",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "idx",
                    "type": "Number",
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
