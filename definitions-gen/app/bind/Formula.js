xds.component.Registry.addDefinition({
    "type": "Ext.app.bind.Formula",
    "className": "Ext.app.bind.Formula",
    "inherits": "Ext.util.Schedulable",
    "autoName": "MyFormula",
    "cfgs": [
        {
            "name": "bind",
            "type": "object"
        },
        {
            "name": "get",
            "type": "function"
        },
        {
            "name": "set",
            "type": "function"
        },
        {
            "name": "single",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
