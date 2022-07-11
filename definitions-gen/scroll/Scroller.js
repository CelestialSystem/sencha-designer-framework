xds.component.Registry.addDefinition({
    "type": "Ext.scroll.Scroller",
    "className": "Ext.scroll.Scroller",
    "classAlias": "scroller.scroller",
    "inherits": "Ext.Evented",
    "mixin": [
        "Ext.mixin.Factoryable",
        "Ext.mixin.Bufferable"
    ],
    "autoName": "MyScroller",
    "typeAlias": [
        "Ext.scroll.NativeScroller"
    ],
    "cfgs": [
        {
            "name": "element",
            "type": "string",
            "bindable": true
        },
        {
            "name": "rtl",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "touchAction",
            "type": "object",
            "bindable": true
        },
        {
            "name": "x",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "y",
            "type": "boolean",
            "defaultValue": true,
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
            "name": "refresh",
            "params": [
                {
                    "name": "scroller",
                    "type": "Ext.scroll.Scroller",
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
            "name": "scroll",
            "params": [
                {
                    "name": "scroller",
                    "type": "Ext.scroll.Scroller",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "deltaX",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "deltaY",
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
            "name": "scrollend",
            "params": [
                {
                    "name": "scroller",
                    "type": "Ext.scroll.Scroller",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "deltaX",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "deltaY",
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
            "name": "scrollstart",
            "params": [
                {
                    "name": "scroller",
                    "type": "Ext.scroll.Scroller",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
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
