xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Bindable",
    "className": "Ext.mixin.Bindable",
    "inherits": "Ext.Base",
    "autoName": "MyBindable",
    "cfgs": [
        {
            "name": "bind",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "controller",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "defaultListenerScope",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "nameable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "publishes",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "reference",
            "type": "string"
        },
        {
            "name": "session",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "shareableName",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "viewModel",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
