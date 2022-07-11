xds.component.Registry.addDefinition({
    "type": "Ext.flash.Component",
    "className": "Ext.flash.Component",
    "classAlias": "widget.flash",
    "inherits": "Ext.Component",
    "autoName": "MyComponent",
    "typeAlias": [
        "Ext.FlashComponent"
    ],
    "cfgs": [
        {
            "name": "backgroundColor",
            "type": "string",
            "defaultValue": "#ffffff"
        },
        {
            "name": "expressInstall",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "flashAttributes",
            "type": "object"
        },
        {
            "name": "flashParams",
            "type": "object"
        },
        {
            "name": "flashVars",
            "type": "object"
        },
        {
            "name": "flashVersion",
            "type": "string",
            "defaultValue": "9.0.115"
        },
        {
            "name": "swfHeight",
            "type": "auto",
            "defaultValue": "100%"
        },
        {
            "name": "swfWidth",
            "type": "auto",
            "defaultValue": "100%"
        },
        {
            "name": "url",
            "type": "string"
        },
        {
            "name": "wmode",
            "type": "string",
            "defaultValue": "opaque"
        }
    ],
    "eventDefs": [
        {
            "name": "failure",
            "params": [
                {
                    "name": "flash",
                    "type": "Ext.flash.Component",
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
            "name": "success",
            "params": [
                {
                    "name": "flash",
                    "type": "Ext.flash.Component",
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
