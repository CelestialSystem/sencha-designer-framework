xds.component.Registry.addDefinition({
    "type": "Ext.parse.Tokenizer",
    "className": "Ext.parse.Tokenizer",
    "inherits": "Ext.util.Fly",
    "autoName": "MyTokenizer",
    "cfgs": [
        {
            "name": "keywords",
            "type": "object",
            "defaultValue": {
                "null": {
                    "type": "literal",
                    "is": {
                        "literal": true,
                        "nil": true
                    },
                    "value": null
                },
                "false": {
                    "type": "literal",
                    "is": {
                        "literal": true,
                        "boolean": true
                    },
                    "value": false
                },
                "true": {
                    "type": "literal",
                    "is": {
                        "literal": true,
                        "boolean": true
                    },
                    "value": true
                }
            },
            "bindable": true
        },
        {
            "name": "operators",
            "type": "object",
            "defaultValue": {
                "+": "plus",
                "-": "minus",
                "*": "multiply",
                "/": "divide",
                "!": "not",
                ",": "comma",
                ":": "colon",
                "[": "arrayOpen",
                "]": "arrayClose",
                "{": "curlyOpen",
                "}": "curlyClose",
                "(": "parenOpen",
                ")": "parenClose"
            },
            "bindable": true
        }
    ]
});
