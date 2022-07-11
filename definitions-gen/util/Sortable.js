xds.component.Registry.addDefinition({
    "type": "Ext.util.Sortable",
    "className": "Ext.util.Sortable",
    "inherits": "Ext.Base",
    "autoName": "MySortable",
    "cfgs": [
        {
            "name": "defaultSortDirection",
            "type": "string",
            "defaultValue": "ASC"
        },
        {
            "name": "multiSortLimit",
            "type": "number",
            "defaultValue": 3
        },
        {
            "name": "sorters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "sortRoot",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforesort",
            "params": [
                {
                    "name": "me",
                    "type": "Ext.util.Sortable",
                    "optional": true
                },
                {
                    "name": "sorters",
                    "type": "Ext.util.Sorter[]",
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
