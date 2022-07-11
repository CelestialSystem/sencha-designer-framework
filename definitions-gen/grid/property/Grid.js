xds.component.Registry.addDefinition({
    "type": "Ext.grid.property.Grid",
    "className": "Ext.grid.property.Grid",
    "classAlias": "widget.propertygrid",
    "inherits": "Ext.grid.Panel",
    "autoName": "MyGrid",
    "typeAlias": [
        "Ext.grid.PropertyGrid"
    ],
    "cfgs": [
        {
            "name": "inferTypes",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "nameColumnWidth",
            "type": "auto",
            "defaultValue": 115
        },
        {
            "name": "nameField",
            "type": "string",
            "defaultValue": "name"
        },
        {
            "name": "source",
            "type": "object",
            "bindable": true
        },
        {
            "name": "sourceConfig",
            "type": "object"
        },
        {
            "name": "valueField",
            "type": "string",
            "defaultValue": "value"
        }
    ],
    "eventDefs": [
        {
            "name": "beforepropertychange",
            "params": [
                {
                    "name": "source",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "recordId",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Object",
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
            "name": "propertychange",
            "params": [
                {
                    "name": "source",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "recordId",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Object",
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
