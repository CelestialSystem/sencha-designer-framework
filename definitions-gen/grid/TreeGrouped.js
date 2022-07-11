xds.component.Registry.addDefinition({
    "type": "Ext.grid.TreeGrouped",
    "className": "Ext.grid.TreeGrouped",
    "inherits": "Ext.grid.Grid",
    "classAlias": "widget.treegroupedgrid",
    "autoName": "MyTreeGrouped",
    "mixin": [
        "Ext.grid.mixin.Menus"
    ],    
    "cfgs": [
        {
            "name": "groupHeaderTpl",
            "type": "string",
            "defaultValue": "{name}",
            "alternates": [
                {
                    "type": "array"
                }
            ],
            "bindable": true
        },
        {
            "name": "groupSummaryPosition",
            "type": "string",
            "defaultValue": "hidden"
        },
        {
            "name": "groupSummaryTpl",
            "type": "string",
            "defaultValue": "Summary ({name})",
            "alternates": [
                {
                    "type": "array"
                }
            ],
            "bindable": true
        },  
        {
            "name": "startCollapsed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "summaryPosition",
            "type": "string",
            "defaultValue": "hidden",
            "bindable": true
        },
        {
            "name": "summaryTpl",
            "type": "string",
            "defaultValue": "Summary ({store.data.length})",
            "alternates": [
                {
                    "type": "array"
                }
            ],
            "bindable": true            
        }
    ],
    "eventDefs": [
        {
            "name": "beforegroupSummaryPositionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "value",
                    "type": "String",
                },
                {
                    "name": "oldValue",
                    "type": "String",
                },                
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "beforesummaryPositionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "value",
                    "type": "String",
                },
                {
                    "name": "oldValue",
                    "type": "String",
                },                
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "groupcontextmenu",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "groupdoubletap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "groupsingletap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }, 
        {
            "name": "groupsummarycontextmenu",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },    
        {
            "name": "groupsummarydoubletap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },                           
        {
            "name": "groupSummaryPositionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "value",
                    "type": "String",
                },
                {
                    "name": "oldValue",
                    "type": "String",
                },                
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "groupsummarysingletap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }, 
        {
            "name": "groupsummarytap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }, 
        {
            "name": "groupsummarytaphold",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }, 
        {
            "name": "grouptap",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }, 
        {
            "name": "grouptaphold",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "params",
                    "type": " Object",
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        },
        {
            "name": "summaryPositionchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.grid.TreeGrouped",
                },
                {
                    "name": "value",
                    "type": "String",
                },
                {
                    "name": "oldValue",
                    "type": "String",
                },                
                {
                    "name": "eOpts",
                    "type": "Object",
                }
            ]
        }
    ]
});
