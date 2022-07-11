xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Editing",
    typeAlias: 'grideditingplugin',

    validParentTypes: ['tablepanel'],

    cfgs: [{
        name: 'triggerEvent',
        merge: true,
        editor: 'options',
        options: ['cellclick', 'celldblclick', 'cellfocus', 'rowfocus']
    }]
});
