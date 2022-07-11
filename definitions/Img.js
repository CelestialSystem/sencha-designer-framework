xds.component.Registry.addDefinition({
    override: "Ext.Img",
    typeAlias: 'image',
    canvasAlias: 'widget.xdimage',
    mixin: ['baseimage'],

    toolbox: {
        name: 'Img',
        iconCls: 'icon-image',
        category: 'Standard',
        groups: ['Views']
    },
    fullscreenAtTopLevel: false,

    ignoreCfgs: [
        // Component
        'autoEl',
        'autoScroll',
        'data',
        'html',
        'tpl',
        'tplWriteMode'
    ],

    cfgs: [
        {
            name: 'src',
            merge: true,
            type: 'uri' //more specific than string
        },
        {
            "name": "glyph",
            "merge": true,
            "allowHexadecimal": true // allow also numbers in hexadecimal formats
        }
    ]
});
