xds.component.Registry.addDefinition({
    "type": "Ext.util.translatable.Abstract",
    "className": "Ext.util.translatable.Abstract",
    "inherits": "Ext.Evented",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyAbstract",
    "eventDefs": [
        {
            "name": "animationend",
            "params": [
                {
                    "name": "abstract",
                    "type": "Ext.util.translatable.Abstract",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "type": "Number",
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
            "name": "animationframe",
            "params": [
                {
                    "name": "abstract",
                    "type": "Ext.util.translatable.Abstract",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "type": "Number",
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
            "name": "animationstart",
            "params": [
                {
                    "name": "abstract",
                    "type": "Ext.util.translatable.Abstract",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "type": "Number",
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
