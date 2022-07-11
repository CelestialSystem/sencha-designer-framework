xds.component.Registry.addDefinition({
    "type": "Ext.resizer.Resizer",
    "className": "Ext.resizer.Resizer",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyResizer",
    "typeAlias": [
        "Ext.Resizable"
    ],
    "cfgs": [
        {
            "name": "constrainTo",
            "type": "object"
        },
        {
            "name": "dynamic",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "handles",
            "type": "string",
            "defaultValue": "s e se"
        },
        {
            "name": "height",
            "type": "number"
        },
        {
            "name": "heightIncrement",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "maxHeight",
            "type": "number",
            "defaultValue": 10000
        },
        {
            "name": "maxWidth",
            "type": "number",
            "defaultValue": 10000
        },
        {
            "name": "minHeight",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "minWidth",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "pinned",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "preserveRatio",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "target",
            "type": "object"
        },
        {
            "name": "transparent",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "width",
            "type": "number"
        },
        {
            "name": "widthIncrement",
            "type": "number",
            "defaultValue": 0
        }
    ],
    "eventDefs": [
        {
            "name": "beforeresize",
            "params": [
                {
                    "name": "resizer",
                    "type": "Ext.resizer.Resizer",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "resize",
            "params": [
                {
                    "name": "resizer",
                    "type": "Ext.resizer.Resizer",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "resizedrag",
            "params": [
                {
                    "name": "resizer",
                    "type": "Ext.resizer.Resizer",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
