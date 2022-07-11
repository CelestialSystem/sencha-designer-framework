xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.RowEditing",
    typeAlias: 'gridroweditingplugin',
    ptype: 'rowediting',

    toolbox: {
        name: 'Row Editing Plugin',
        iconCls: 'icon-rowedit',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyRowEditingPlugin',

    getTargetForConvertToAction: function() {
        return this.up();
    }
});
