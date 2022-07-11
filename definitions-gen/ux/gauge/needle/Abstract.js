xds.component.Registry.addDefinition({
    "type": "Ext.ux.gauge.needle.Abstract",
    "className": "Ext.ux.gauge.needle.Abstract",
    "classAlias": "gauge.needle.abstract",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyAbstract",
    "cfgs": [
        {
            "name": "innerRadius",
            "type": "object",
            "defaultValue": 25,
            "bindable": true
        },
        {
            "name": "outerRadius",
            "type": "object",
            "defaultValue": "100% - 20",
            "bindable": true
        },
        {
            "name": "path",
            "type": "object",
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        }
    ]
});
