xds.component.Registry.addDefinition({
    override: 'Ext.data.schema.HasOne',
    typeAlias: 'schemahasone',

    mixin: ['association'],

    toolbox: {
        name: 'HasOne association',
        iconCls: 'icon-association-hasone',
        category: 'Data Models',
        groups: ['Data', 'Models']
    },

    autoName: 'MyHasOneAssociation',
    namePrefix: 'HasOne',

    init: function() {
        this.setReference('hasOne');
    }
});
