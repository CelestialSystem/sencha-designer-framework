xds.component.Registry.addDefinition({
    "type": "Ext.pivot.d3.TreeMap",
    "className": "Ext.pivot.d3.TreeMap",
    "classAlias": "widget.pivottreemap",
    "inherits": "Ext.d3.hierarchy.TreeMap",
    "autoName": "MyTreeMap",
    "cfgs": [
        {
            "name": "autoExpand",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "matrix",
            "type": "object",
            "defaultValue": {
                "type": "local",
                "rowGrandTotalsPosition": "none",
                "colGrandTotalsPosition": "none"
            },
            "bindable": true
        }
    ]
});
