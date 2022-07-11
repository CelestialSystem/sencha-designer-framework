xds.component.Registry.addDefinition({
    "type": "Ext.Media",
    "className": "Ext.Media",
    "classAlias": "widget.media",
    "inherits": "Ext.Component",
    "autoName": "MyMedia",
    "cfgs": [
        {
            "name": "autoPause",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoResume",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "controls",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "loop",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "media",
            "type": "object",
            "bindable": true
        },
        {
            "name": "muted",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "preload",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        },
        {
            "name": "volume",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "ended",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
                    "optional": true
                },
                {
                    "name": "time",
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
            "name": "mutedchange",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
                    "optional": true
                },
                {
                    "name": "muted",
                    "type": "Boolean",
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
            "name": "pause",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
                    "optional": true
                },
                {
                    "name": "time",
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
            "name": "play",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
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
            "name": "stop",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
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
            "name": "timeupdate",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
                    "optional": true
                },
                {
                    "name": "time",
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
            "name": "volumechange",
            "params": [
                {
                    "name": "media",
                    "type": "Ext.Media",
                    "optional": true
                },
                {
                    "name": "volume",
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
