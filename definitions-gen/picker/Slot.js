xds.component.Registry.addDefinition({
    "type": "Ext.picker.Slot",
    "className": "Ext.picker.Slot",
    "classAlias": "widget.pickerslot",
    "inherits": "Ext.dataview.DataView",
    "autoName": "MySlot",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "itemTpl",
            "type": "string",
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "scrollable",
            "type": "object",
            "defaultValue": {
                "x": false,
                "y": true,
                "scrollbars": false
            },
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "editor": "options",
            "options": [
                "tap"
            ],
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true
        },
        {
            "name": "valueField",
            "type": "string",
            "defaultValue": "value",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "slotpick",
            "params": [
                {
                    "name": "pickerslot",
                    "type": "Ext.picker.Slot",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Mixed",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
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
