xds.component.Registry.addDefinition({
    "type": "Ext.parse.Parser",
    "className": "Ext.parse.Parser",
    "inherits": "Ext.util.Fly",
    "autoName": "MyParser",
    "cfgs": [
        {
            "name": "constants",
            "type": "object",
            "defaultValue": {
                "null": null,
                "false": false,
                "true": true
            },
            "bindable": true
        },
        {
            "name": "infix",
            "type": "object",
            "defaultValue": {
                "===": 40,
                "!==": 40,
                "==": 40,
                "!=": 40,
                "<": 40,
                "<=": 40,
                ">": 40,
                ">=": 40,
                "+": 50,
                "-": 50,
                "*": 60,
                "/": 60
            },
            "bindable": true
        },
        {
            "name": "infixRight",
            "type": "object",
            "defaultValue": {
                "&&": 30,
                "||": 30
            },
            "bindable": true
        },
        {
            "name": "prefix",
            "type": "object",
            "defaultValue": {
                "!": 0,
                "-": 0,
                "+": 0
            },
            "bindable": true
        },
        {
            "name": "symbols",
            "type": "object",
            "defaultValue": {
                ":": 0,
                ",": 0,
                ")": 0,
                "[": 0,
                "]": 0,
                "{": 0,
                "}": 0,
                "(end)": 0,
                "(ident)": {
                    "arity": "ident",
                    "isIdent": true
                },
                "(literal)": {
                    "arity": "literal",
                    "isLiteral": true
                },
                "(": {
                    "xclass": "Ext.parse.symbol.Paren"
                }
            },
            "bindable": true
        },
        {
            "name": "token",
            "type": "object"
        },
        {
            "name": "tokenizer",
            "type": "object",
            "defaultValue": {
                "keywords": null
            },
            "bindable": true
        }
    ]
});
