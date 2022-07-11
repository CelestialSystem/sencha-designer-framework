xds.component.Registry.addDefinition({
    "type": "Ext.dom.Layer",
    "className": "Ext.dom.Layer",
    "inherits": "Ext.dom.Element",
    "autoName": "MyLayer",
    "typeAlias": [
        "Ext.Layer"
    ],
    "cfgs": [
        {
            "name": "cls",
            "type": "string"
        },
        {
            "name": "constrain",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "dh",
            "type": "object",
            "defaultValue": {
                "tag": "div",
                "cls": "x-layer"
            }
        },
        {
            "name": "hideMode",
            "type": "string"
        },
        {
            "name": "shadow",
            "type": "string",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "shadowOffset",
            "type": "number",
            "defaultValue": 4
        },
        {
            "name": "shim",
            "type": "string",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "useDisplay",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "visibilityCls",
            "type": "string"
        },
        {
            "name": "zindex",
            "type": "number",
            "defaultValue": 11000
        }
    ]
});
