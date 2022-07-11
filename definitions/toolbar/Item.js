xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Item",
    typeAlias: 'tbitem',

    transformGroup: 'tbitem',
    validParentTypes: ['toolbar'],
    fullscreenAtTopLevel: false
});
