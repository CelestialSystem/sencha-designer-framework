xds.component.Registry.addDefinition({
    "type": "Ext.d3.legend.Legend",
    "className": "Ext.d3.legend.Legend",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.d3.mixin.Detached"
    ],
    "autoName": "MyLegend",
    "cfgs": [
        {
            "name": "component",
            "type": "object",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        }
    ]
});
