xds.component.Registry.addDefinition({
    "type": "Ext.Anim",
    "className": "Ext.Anim",
    "inherits": "Ext.Base",
    "autoName": "MyAnim",
    "cfgs": [
        {
            "name": "after",
            "type": "function"
        },
        {
            "name": "autoClear",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "before",
            "type": "function"
        },
        {
            "name": "delay",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "direction",
            "type": "string"
        },
        {
            "name": "disableAnimations",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "duration",
            "type": "number",
            "defaultValue": 250
        },
        {
            "name": "easing",
            "type": "string",
            "defaultValue": "ease-in-out"
        },
        {
            "name": "from",
            "type": "object",
            "defaultValue": {}
        },
        {
            "name": "out",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "reverse",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "to",
            "type": "object",
            "defaultValue": {}
        }
    ]
});
