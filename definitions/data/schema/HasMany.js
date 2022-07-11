xds.component.Registry.addDefinition({
    override: 'Ext.data.schema.HasMany',
    typeAlias: 'schemahasmany',

    mixin: ['association'],

    toolbox: {
        name: 'HasMany association',
        iconCls: 'icon-hasmany-association',
        category: 'Data Models',
        groups: ['Data', 'Models']
    },

    autoName: 'MyHasManyAssociation',
    namePrefix: 'HasMany',

    init: function() {
        this.setReference('hasMany');
    }
});
