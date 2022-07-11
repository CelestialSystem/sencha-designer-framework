xds.component.Registry.addDefinition({
    "type": "Ext.data.reader.Reader",
    "className": "Ext.data.reader.Reader",
    "classAlias": "reader.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyReader",
    "typeAlias": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
    ],
    "cfgs": [
        {
            "name": "groupRootProperty",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "implicitIncludes",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "keepRawData",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "messageProperty",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "model",
            "type": "string",
            "bindable": true
        },
        {
            "name": "readRecordsOnFailure",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "rootProperty",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "successProperty",
            "type": "string",
            "defaultValue": "success",
            "bindable": true
        },
        {
            "name": "summaryRootProperty",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "totalProperty",
            "type": "string",
            "defaultValue": "total",
            "bindable": true
        },
        {
            "name": "transform",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "typeProperty",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "exception",
            "params": [
                {
                    "name": "reader",
                    "type": "Ext.data.reader.Reader",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "XMLHttpRequest",
                    "optional": true
                },
                {
                    "name": "error",
                    "type": "Ext.data.ResultSet",
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
