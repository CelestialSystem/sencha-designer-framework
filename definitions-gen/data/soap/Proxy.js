xds.component.Registry.addDefinition({
    "type": "Ext.data.soap.Proxy",
    "className": "Ext.data.soap.Proxy",
    "classAlias": "proxy.soap",
    "inherits": "Ext.data.proxy.Ajax",
    "autoName": "MyProxy",
    "cfgs": [
        {
            "name": "api",
            "type": "object",
            "bindable": true
        },
        {
            "name": "createBodyTpl",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "destroyBodyTpl",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "envelopeTpl",
            "type": "template",
            "defaultValue": [
                "<?xml version=\"1.0\" encoding=\"utf-8\" ?>",
                "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">",
                "{[values.bodyTpl.apply(values)]}",
                "</soap:Envelope>"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "operationParam",
            "type": "string",
            "defaultValue": "op",
            "bindable": true
        },
        {
            "name": "readBodyTpl",
            "type": "template",
            "defaultValue": [
                "<soap:Body>",
                "<{operation} xmlns=\"{targetNamespace}\">",
                "<tpl foreach=\"params\">",
                "<{$}>{.}</{$}>",
                "</tpl>",
                "</{operation}>",
                "</soap:Body>"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "reader",
            "type": "object",
            "defaultValue": "soap",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "soapAction",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "targetNamespace",
            "type": "string",
            "bindable": true
        },
        {
            "name": "updateBodyTpl",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        },
        {
            "name": "writeBodyTpl",
            "type": "template",
            "defaultValue": [
                "<soap:Body>",
                "<{operation} xmlns=\"{targetNamespace}\">",
                "<tpl for=\"records\">",
                "{% var recordName=values.modelName.split(\".\").pop(); %}",
                "<{[recordName]}>",
                "<tpl for=\"fields\">",
                "<{name}>{[parent.get(values.name)]}</{name}>",
                "</tpl>",
                "</{[recordName]}>",
                "</tpl>",
                "</{operation}>",
                "</soap:Body>"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
