xds.component.Registry.addDefinition({
    "type": "Ext.app.BaseController",
    "className": "Ext.app.BaseController",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.route.Mixin"
    ],
    "autoName": "MyBaseController",
    "cfgs": [
        {
            "name": "control",
            "type": "object",
            "bindable": true
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "listen",
            "type": "object",
            "bindable": true
        }
    ]
});
