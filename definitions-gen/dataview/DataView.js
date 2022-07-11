xds.component.Registry.addDefinition({
    "type": "Ext.dataview.DataView",
    "className": "Ext.dataview.DataView",
    "classAlias": "widget.dataview",
    "inherits": "Ext.dataview.Abstract",
    "autoName": "MyDataView",
    "typeAlias": [
        "Ext.DataView"
    ],
    "cfgs": [
        {
            "name": "selected",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "childdoubletap",
            "params": [
                {
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
                    "name": "dataview",
                    "type": "Ext.dataview.DataView",
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
            "name": "rowselection",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.dataview.DataView",
                    "optional": true
                },
                {
                    "name": "selection",
                    "type": "Ext.dataview.selection.Rows",
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
            "name": "selectionchange",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.dataview.DataView",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
                    "optional": true
                },
                {
                    "name": "selected",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "selection",
                    "type": "Ext.dataview.selection.Selection",
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
