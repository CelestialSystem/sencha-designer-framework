xds.component.Registry.addDefinition({
    "type": "Ext.state.LocalStorage",
    "className": "Ext.state.LocalStorage",
    "inherits": "Ext.state.Provider",
    "autoName": "MyLocalStorage",
    "cfgs": [
        {
            "name": "storage",
            "type": "object",
            "defaultValue": {
                "id": "ext-state"
            },
            "bindable": true
        }
    ]
});
