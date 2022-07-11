xds.component.Registry.addDefinition({
    "type": "Ext.grid.feature.Grouping",
    "className": "Ext.grid.feature.Grouping",
    "classAlias": "feature.grouping",
    "inherits": "Ext.grid.feature.Feature",
    "mixin": [
        "Ext.grid.feature.AbstractSummary"
    ],
    "autoName": "MyGrouping",
    "cfgs": [
        {
            "name": "collapseTip",
            "type": "string",
            "defaultValue": "Click to collapse. CTRL/click collapses all others"
        },
        {
            "name": "collapsible",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "depthToIndent",
            "type": "number",
            "defaultValue": 17
        },
        {
            "name": "enableGroupingMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableNoGroups",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "expandTip",
            "type": "string",
            "defaultValue": "Click to expand. CTRL key collapses all others"
        },
        {
            "name": "groupByText",
            "type": "string",
            "defaultValue": "Group by this field"
        },
        {
            "name": "groupers",
            "type": "array"
        },
        {
            "name": "groupHeaderTpl",
            "type": "string",
            "defaultValue": "{columnName}: {name}",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "hideGroupedHeader",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "remoteRoot",
            "type": "string"
        },
        {
            "name": "showGroupsText",
            "type": "string",
            "defaultValue": "Show in groups"
        },
        {
            "name": "startCollapsed",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "groupclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "groupcollapse",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "String",
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
            "name": "groupcontextmenu",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "groupdblclick",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "groupexpand",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "String",
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
