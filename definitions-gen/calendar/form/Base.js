xds.component.Registry.addDefinition({
    "type": "Ext.calendar.form.Base",
    "className": "Ext.calendar.form.Base",
    "inherits": "Ext.Mixin",
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "event",
            "type": "object",
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "cancel",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.form.Base",
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
            "name": "drop",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.form.Base",
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
            "name": "save",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.form.Base",
                    "optional": true
                },
                {
                    "name": "context",
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
