xds.component.Registry.addDefinition({
    "type": "Ext.dataview.ChipView",
    "className": "Ext.dataview.ChipView",
    "classAlias": "widget.chipview",
    "inherits": "Ext.dataview.DataView",
    "autoName": "MyChipView",
    "cfgs": [
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "closableField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "closeHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "closeHandler"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "displayTpl",
            "type": "template",
            "bindable": true
        },
        {
            "name": "iconClsField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemTpl",
            "type": "object",
            "defaultValue": "<div class=\"x-body-el\"><div class=\"{_chipIconCls}\" style=\"{_chipIconStyle}\"></div><div class=\"x-text-el\">{_chipText}</div><div class=\"x-close-el x-font-icon\"></div></div>",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ui",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        }
    ]
});
