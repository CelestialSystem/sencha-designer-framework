xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.RowExpander",
    "className": "Ext.grid.plugin.RowExpander",
    "classAlias": "plugin.rowexpander",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyRowExpander",
    "cfgs": [
        {
            "name": "bodyBefore",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "columnWidth",
            "type": "number",
            "defaultValue": 24
        },
        {
            "name": "expandOnDblClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "expandOnEnter",
            "type": "boolean"
        },
        {
            "name": "headerWidth",
            "type": "number",
            "defaultValue": 24
        },
        {
            "name": "lockedTpl",
            "type": "template"
        },
        {
            "name": "rowBodyTpl",
            "type": "template"
        },
        {
            "name": "scrollIntoViewOnExpand",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "selectRowOnExpand",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "collapsebody",
            "params": [
                {
                    "name": "rowNode",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "expandRow",
                    "type": "HTMLElement",
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
            "name": "expandbody",
            "params": [
                {
                    "name": "rowNode",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "expandRow",
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
