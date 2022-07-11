xds.component.Registry.addDefinition({
    "type": "Ext.layout.Form",
    "className": "Ext.layout.Form",
    "classAlias": "layout.form",
    "inherits": "Ext.layout.Auto",
    "autoName": "MyForm",
    "cfgs": [
        {
            "name": "itemSpacing",
            "type": "number",
            "bindable": true
        },
        {
            "name": "labelWidth",
            "type": "auto",
            "defaultValue": "auto",
            "bindable": true
        }
    ]
});
