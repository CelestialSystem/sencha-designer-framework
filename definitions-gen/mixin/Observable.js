xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Observable",
    "className": "Ext.mixin.Observable",
    "inherits": "Ext.Mixin",
    "mixin": [
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyObservable",
    "cfgs": [
        {
            "name": "listeners",
            "type": "object",
            "bindable": true
        }
    ]
});
