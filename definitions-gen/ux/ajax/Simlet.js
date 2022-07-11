xds.component.Registry.addDefinition({
    "type": "Ext.ux.ajax.Simlet",
    "className": "Ext.ux.ajax.Simlet",
    "classAlias": "simlet.basic",
    "inherits": "Ext.Base",
    "autoName": "MySimlet",
    "cfgs": [
        {
            "name": "responseHeaders",
            "type": "object",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "responseText",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "responseXML",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "status",
            "type": "number",
            "defaultValue": 200,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "statusText",
            "type": "string",
            "defaultValue": "OK",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        }
    ]
});
