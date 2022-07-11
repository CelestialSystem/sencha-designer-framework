xds.component.Registry.addDefinition({
    "type": "Ext.grid.property.HeaderContainer",
    "className": "Ext.grid.property.HeaderContainer",
    "inherits": "Ext.grid.header.Container",
    "autoName": "MyHeaderContainer",
    "typeAlias": [
        "Ext.grid.PropertyColumnModel"
    ],
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "defaultValue": "m/j/Y"
        },
        {
            "name": "falseText",
            "type": "string",
            "defaultValue": false
        },
        {
            "name": "nameText",
            "type": "string",
            "defaultValue": "Name"
        },
        {
            "name": "trueText",
            "type": "string",
            "defaultValue": true
        },
        {
            "name": "valueText",
            "type": "string",
            "defaultValue": "Value"
        }
    ]
});
