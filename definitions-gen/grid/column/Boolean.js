xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Boolean",
    "className": "Ext.grid.column.Boolean",
    "classAlias": "widget.booleancolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyBoolean",
    "cfgs": [
        {
            "name": "falseText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "trueText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "undefinedText",
            "type": "string",
            "bindable": true
        }
    ]
});
