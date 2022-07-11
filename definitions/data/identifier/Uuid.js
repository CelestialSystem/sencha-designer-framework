xds.component.Registry.addDefinition({
    override: "Ext.data.identifier.Uuid",
    typeAlias: 'uuidgenerator',

    classAlias: 'identifier.uuid',

    toolbox: {
        name: 'UUID Generator',
        iconCls: 'icon-uuid-generator',
        category: 'Data Models',
        groups: ['Data']
    },

    cfgs: [{
        name: 'version',
        merge: true,
        editor: 'options',
        options: [1, 4]
    }]

});