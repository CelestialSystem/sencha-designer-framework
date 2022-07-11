xds.component.Registry.addDefinition({
    override: "Ext.Media",
    typeAlias: "media",

    obscureCfgs: ['html'],

    ignoreCfgs: [
        "tpl",
        "tplWriteMode",
        "data",
        "media" // Ext.Element not settable
    ],

    cfgs: [
        {
            name: "volume",
            merge: true,
            minValue: 0,
            maxValue: 1
        }
    ]

});
