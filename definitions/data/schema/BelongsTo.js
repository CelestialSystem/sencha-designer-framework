xds.component.Registry.addDefinition({
    override: 'Ext.data.schema.BelongsTo',
    typeAlias: 'schemabelongsto',

    mixin: ['association'],

    toolbox: {
        name: 'BelongsTo association',
        iconCls: 'icon-belong-to-association',
        category: 'Data Models',
        groups: ['Data', 'Models']
    },

    autoName: 'MyBelongsToAssociation',
    namePrefix: 'BelongsTo',

    init: function() {
        this.setReference('belongsTo');
    }
});
