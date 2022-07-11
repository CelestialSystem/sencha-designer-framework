xds.component.Registry.addDefinition({
    type: 'Ext.data.schema.BelongsTo',
    className: 'Ext.data.schema.BelongsTo',
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
