xds.component.Registry.addDefinition({
    override: "Ext.field.Text",
    typeAlias: "textfield",

    "autoName": "MyTextField",
    "toolbox": {
        "name": "Text Field",
        "iconCls": "icon-textfield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    cfgs: [{
        name: "maxLength",
        merge: true,
        minValue: 0
    }]

});
