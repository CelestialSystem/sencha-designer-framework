xds.component.Registry.addDefinition({
    "type": "Ext.form.FieldContainer",
    "className": "Ext.form.FieldContainer",
    "classAlias": "widget.fieldcontainer",
    "inherits": "Ext.container.Container",
    "mixin": [
        "Ext.form.Labelable",
        "Ext.form.FieldAncestor"
    ],
    "autoName": "MyFieldContainer",
    "cfgs": [
        {
            "name": "combineErrors",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "combineLabels",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "labelConnector",
            "type": "string",
            "defaultValue": ", "
        }
    ]
});
