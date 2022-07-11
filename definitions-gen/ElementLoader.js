xds.component.Registry.addDefinition({
    "type": "Ext.ElementLoader",
    "className": "Ext.ElementLoader",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyElementLoader",
    "cfgs": [
        {
            "name": "ajaxOptions",
            "type": "object"
        },
        {
            "name": "autoLoad",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseParams",
            "type": "object"
        },
        {
            "name": "callback",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "failure",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "loadMask",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "params",
            "type": "object"
        },
        {
            "name": "renderer",
            "type": "function"
        },
        {
            "name": "rendererScope",
            "type": "object"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "scripts",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "success",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "target",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "url",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforeload",
            "params": [
                {
                    "name": "elementloader",
                    "type": "Ext.ElementLoader",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "exception",
            "params": [
                {
                    "name": "elementloader",
                    "type": "Ext.ElementLoader",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "load",
            "params": [
                {
                    "name": "elementloader",
                    "type": "Ext.ElementLoader",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "options",
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
