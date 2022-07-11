xds.component.Registry.addDefinition({
    override: "Ext.field.Picker",

    cfgs: [{
        name: 'picker',
        merge: true,
        editor: 'combo',
        options: ['edge', 'floated', 'auto']
    }]
});
