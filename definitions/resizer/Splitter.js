xds.component.Registry.addDefinition({
    override: "Ext.resizer.Splitter",
    typeAlias: "splitter",

    "canvasAlias": "xdsplitter",
    "toolbox": {
        "name": "Splitter",
        "iconCls": "icon-splitter",
        "category": "Standard",
        "groups": ['Views']
    },
    "validChildTypes": [],
    fullscreenAtTopLevel: false,

    "ignoreCfgs": [
        // Component
        'autoEl',
        'autoScroll',
        'data',
        'html',
        'renderTpl',
        'tpl',
        'tplWriteMode'
    ]
});
