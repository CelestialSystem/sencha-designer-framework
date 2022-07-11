xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Keyboard",
    "className": "Ext.mixin.Keyboard",
    "inherits": "Ext.Mixin",
    "autoName": "MyKeyboard",
    "cfgs": [
        {
            "name": "keyMap",
            "type": "object",
            "bindable": true
        },
        {
            "name": "keyMapEnabled",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "keyMapTarget",
            "type": "string",
            "defaultValue": "el"
        }
    ]
});
