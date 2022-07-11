xds.component.Registry.addDefinition({
    "type": "Ext.grid.feature.AdvancedGrouping",
    "className": "Ext.grid.feature.AdvancedGrouping",
    "classAlias": "feature.advancedgrouping",
    "inherits": "Ext.grid.feature.Feature",
    "autoName": "MyAdvancedGrouping",
    "cfgs": [
        {
            "name": "expandAllText",
            "type": "string",
            "defaultValue": "Expand all"
        },
        {
            "name": "collapseAllText",
            "type": "string",
            "defaultValue": "Collapse all"
        },
        {
            "name": "groupsText",
            "type": "string",
            "defaultValue": "Groups"
        },
        {
            "name": "groupByText",
            "type": "string",
            "defaultValue": "Group by this field"
        },
        {
            "name": "addToGroupingText",
            "type": "string",
            "defaultValue": "Add to grouping"
        },
        {
            "name": "removeFromGroupingText",
            "type": "string",
            "defaultValue": "Remove from grouping"
        },
        {
            "name": "startGroupedHeadersHidden",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "startCollapsed",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableGroupingMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "groupSummaryPosition",
            "type": "string",
            "defaultValue": "hidden"
        },
        {
            "name": "summaryPosition",
            "type": "string",
            "defaultValue": "hidden"
        },  
        {
            "name": "groupsColumnWidth",
            "type": "number",
            "defaultValue": 200
        },  
        {
            "name": "groupHeaderTpl",
            "type": "string",
            "defaultValue": "{name}",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "groupSummaryTpl",
            "type": "string",
            "defaultValue": "Summary ({name})",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "summaryTpl",
            "type": "string",
            "defaultValue": "Summary ({store.data.length})",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "outerTpl",
            "type": "array"
        },
        {
            "name": "rowTpl",
            "type": "array"
        },        
    ],
    "eventDefs": [
        {
            "name": "aftergroupschange",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "groupers",
                    "type": " Ext.util.Grouper[]",
                    "optional": false
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
            "name": "beforegroupschange",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "groupers",
                    "type": " Ext.util.Grouper[]",
                    "optional": false
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
            "name": "groupclick",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
            "name": "groupcontextmenu",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
            "name": "groupsummaryclick",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
            "name": "groupsummarycontextmenu",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
            "name": "summaryclick",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
            "name": "summarycontextmenu",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": false
                },
                {
                    "name": "params",
                    "type": " Object",
                    "optional": false
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
        }
    ]
});
