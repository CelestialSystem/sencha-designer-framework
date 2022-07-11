xds.component.Registry.addDefinition({
    override: "Ext.Img",
    typeAlias: "image",
    canvasAlias: "widget.xdimage",

    mixin: ['baseimage'],

    toolbox: {
        "name": "Image",
        "iconCls": "icon-image",
        "category": "Media",
        "groups": ['Views']
    },

    cfgs: [{
        name: 'src',
        merge: true,
        type: 'uri' //more specific than string
    }],

    ignoreCfgs: ["tpl", "tplWriteMode", "data"]
});
