xds.component.Registry.addDefinition({
    override: "Ext.Spacer",
    typeAlias: "spacer",

    "toolbox": {
        "name": "Spacer",
        "iconCls": "icon-spacer",
        "category": "Standard",
        "groups": ["Views"]
    },

    "fullscreenAtTopLevel": false,

    ignoreCfgs: [
        'flex' // added by layout
    ]
});
