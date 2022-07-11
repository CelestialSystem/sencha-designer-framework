xds.component.Registry.addDefinition({
    "type": "Ext.pivot.d3.AbstractContainer",
    "className": "Ext.pivot.d3.AbstractContainer",
    "inherits": "Ext.Panel",
    "autoName": "MyAbstractContainer",
    "cfgs": [
        {
            "name": "configurator",
            "type": "object",
            "bindable": true
        },
        {
            "name": "drawing",
            "type": "object",
            "defaultValue": {
                "xtype": "pivotheatmap"
            },
            "bindable": true
        },
        {
            "name": "matrix",
            "type": "object",
            "defaultValue": {
                "type": "local"
            },
            "bindable": true
        }
    ]
});
