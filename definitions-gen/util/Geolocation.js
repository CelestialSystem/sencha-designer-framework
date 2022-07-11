xds.component.Registry.addDefinition({
    "type": "Ext.util.Geolocation",
    "className": "Ext.util.Geolocation",
    "inherits": "Ext.Evented",
    "autoName": "MyGeolocation",
    "typeAlias": [
        "Ext.util.GeoLocation"
    ],
    "cfgs": [
        {
            "name": "accuracy",
            "type": "number",
            "bindable": true
        },
        {
            "name": "allowHighAccuracy",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "altitude",
            "type": "number",
            "bindable": true
        },
        {
            "name": "altitudeAccuracy",
            "type": "number",
            "bindable": true
        },
        {
            "name": "autoUpdate",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "frequency",
            "type": "number",
            "defaultValue": 10000,
            "bindable": true
        },
        {
            "name": "heading",
            "type": "number",
            "bindable": true
        },
        {
            "name": "latitude",
            "type": "number",
            "bindable": true
        },
        {
            "name": "longitude",
            "type": "number",
            "bindable": true
        },
        {
            "name": "maximumAge",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "speed",
            "type": "number",
            "bindable": true
        },
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": null,
            "bindable": true
        },
        {
            "name": "timestamp",
            "type": "date",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "locationerror",
            "params": [
                {
                    "name": "geolocation",
                    "type": "Ext.util.Geolocation",
                    "optional": true
                },
                {
                    "name": "timeout",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "permissionDenied",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "locationUnavailable",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "message",
                    "type": "String",
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
            "name": "locationupdate",
            "params": [
                {
                    "name": "geolocation",
                    "type": "Ext.util.Geolocation",
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
