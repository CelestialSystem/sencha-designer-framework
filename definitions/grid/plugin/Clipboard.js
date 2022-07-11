xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Clipboard",
    typeAlias: 'gridclipboardplugin',
    ptype: 'clipboard',

    toolbox: {
        name: 'Clipboard Plugin',
        iconCls: 'icon-clipboard',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },

    autoName: 'MyClipboardPlugin'
});
