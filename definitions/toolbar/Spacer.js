xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Spacer",
    typeAlias: 'tbspacer',

    toolbox: {
        name: 'Spacer',
        iconCls: 'icon-spacer',
        category: 'Toolbar',
        groups: ["Views"]
    },
    transformGroup: 'tbitemspace',
    fullscreenAtTopLevel: false
});
