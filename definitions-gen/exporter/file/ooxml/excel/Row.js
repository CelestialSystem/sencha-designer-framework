xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Row",
    "className": "Ext.exporter.file.ooxml.excel.Row",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyRow",
    "cfgs": [
        {
            "name": "cells",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "collapsed",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "height",
            "type": "number",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "index",
            "type": "string",
            "bindable": true
        },
        {
            "name": "outlineLevel",
            "type": "number",
            "bindable": true
        },
        {
            "name": "showPhonetic",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "styleId",
            "type": "string",
            "bindable": true
        },
        {
            "name": "worksheet",
            "type": "object",
            "bindable": true
        }
    ]
});
