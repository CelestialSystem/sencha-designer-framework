xds.component.Registry.addDefinition({
    "type": "Ext.d3.hierarchy.tree.Tree",
    "className": "Ext.d3.hierarchy.tree.Tree",
    "inherits": "Ext.d3.hierarchy.Hierarchy",
    "autoName": "MyTree",
    "cfgs": [
        {
            "name": "nodeRadius",
            "type": "number",
            "defaultValue": 5,
            "bindable": true
        },
        {
            "name": "nodeSize",
            "type": "array",
            "bindable": true
        }
    ]
});
