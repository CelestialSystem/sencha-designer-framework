xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Boolean",
    "className": "Ext.grid.cell.Boolean",
    "classAlias": "widget.booleancell",
    "inherits": "Ext.grid.cell.Text",
    "autoName": "MyBoolean",
    "cfgs": [
        {
            "name": "falseText",
            "type": "string",
            "defaultValue": "False",
            "bindable": true
        },
        {
            "name": "trueText",
            "type": "string",
            "defaultValue": "True",
            "bindable": true
        },
        {
            "name": "undefinedText",
            "type": "string",
            "defaultValue": "\\xa0",
            "bindable": true
        }
    ]
});
