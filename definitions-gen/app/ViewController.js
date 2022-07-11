xds.component.Registry.addDefinition({
    "type": "Ext.app.ViewController",
    "className": "Ext.app.ViewController",
    "classAlias": "controller.controller",
    "inherits": "Ext.app.BaseController",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyViewController",
    "cfgs": [
        {
            "name": "bindings",
            "type": "object",
            "bindable": true
        }
    ]
});
