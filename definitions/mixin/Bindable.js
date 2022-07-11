xds.component.Registry.addDefinition({
    override: "Ext.mixin.Bindable",
    typeAlias: 'bindable',

    ignoreCfgs: [
        'bind' //the bind block is built up in codegen only
    ]
});
