xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Row",
    "className": "Ext.exporter.file.excel.Row",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyRow",
    "cfgs": [
        {
            "name": "autoFitHeight",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "caption",
            "type": "string",
            "bindable": true
        },
        {
            "name": "cells",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "height",
            "type": "number",
            "bindable": true
        },
        {
            "name": "index",
            "type": "string",
            "bindable": true
        },
        {
            "name": "span",
            "type": "number",
            "bindable": true
        },
        {
            "name": "styleId",
            "type": "string",
            "bindable": true
        }
    ]
});
