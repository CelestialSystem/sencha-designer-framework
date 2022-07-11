xds.component.Registry.addDefinition({
    "type": "Ext.view.NavigationModel",
    "className": "Ext.view.NavigationModel",
    "classAlias": "view.navigation.default",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable",
        "Ext.mixin.Factoryable",
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyNavigationModel",
    "eventDefs": [
        {
            "name": "navigate",
            "params": [
                {
                    "name": "event",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "keyEvent",
                    "type": "Ext.event.Event",
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
