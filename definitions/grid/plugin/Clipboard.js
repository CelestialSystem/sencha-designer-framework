xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Clipboard",

    typeAlias: "gridclipboardplugin",
    ptype: 'clipboard',

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Clipboard Plugin',
        iconCls: 'icon-clipboard',
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});
