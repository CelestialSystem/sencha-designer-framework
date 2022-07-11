xds.component.Registry.addDefinition({
    override: "Ext.mixin.Toolable",

    cfgs: [{
        name: 'tools',
        merge: true,
        displayName: 'Tools',
        type: 'refgroup',
        refSelector: 'tool',
        createTypes: ['tool'],
        alternates: [
            {
                displayName: 'tools',
                name: 'tools',
                type: 'array'
            },
            {
                displayName: 'tools',
                name: 'tools',
                type: 'object'
            }
        ]
    }]
});
