xds.component.Registry.addDefinition({
    "type": "Ext.grid.NavigationModel",
    "className": "Ext.grid.NavigationModel",
    "classAlias": "view.navigation.grid",
    "inherits": "Ext.view.NavigationModel",
    "autoName": "MyNavigationModel",
    "eventDefs": [
        {
            "name": "cellactivate",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "position",
                    "type": "Ext.grid.CellContext",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "navigate",
            "params": [
                {
                    "name": "event",
                    "type": "Object",
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
