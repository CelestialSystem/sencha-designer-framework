xds.component.Registry.addDefinition({
    "type": "Ext.layout.Auto",
    "className": "Ext.layout.Auto",
    "classAlias": "layout.default",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyAuto",
    "typeAlias": [
        "Ext.layout.Default"
    ],
    "cfgs": [
        {
            "name": "animation",
            "type": "object",
            "bindable": true
        },
        {
            "name": "container",
            "type": "object",
            "bindable": true
        }
    ]
});
