xds.component.Registry.addDefinition({
    "type": "Ext.dataview.Component",
    "className": "Ext.dataview.Component",
    "classAlias": "widget.componentdataview",
    "inherits": "Ext.dataview.Abstract",
    "autoName": "MyComponent",
    "cfgs": [
        {
            "name": "defaultType",
            "type": "object",
            "bindable": true
        },
        {
            "name": "itemConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "dataitem"
            },
            "bindable": true
        },
        {
            "name": "itemContentCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemDataMap",
            "type": "object",
            "bindable": true
        },
        {
            "name": "itemInnerCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "maxItemCache",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        },
        {
            "name": "striped",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "childdoubletap",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childlongpress",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childmouseenter",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childmouseleave",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childsingletap",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtap",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtaphold",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtouchcancel",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtouchend",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtouchmove",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
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
            "name": "childtouchstart",
            "params": [
                {
                    "name": "componentdataview",
                    "type": "Ext.dataview.Component",
                    "optional": true
                },
                {
                    "name": "location",
                    "type": "Ext.dataview.Location",
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
