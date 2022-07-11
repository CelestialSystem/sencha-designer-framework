xds.component.Registry.addDefinition({
    override: "Ext.field.Toggle",
    typeAlias: "togglefield",

    "autoName": "MyToggleField",
    "toolbox": {
        "name": "Toggle Field",
        "iconCls": "icon-togglefield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    obscureCfgs: ['maxValueCls', 'minValueCls']
});
