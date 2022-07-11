xds.component.Registry.addDefinition({
    override: 'Ext.data.schema.Association',
    typeAlias: 'association',

    mixin: ['baseutil', 'associationbehavior'],

    validParentTypes: ['datamodel'],
    validChildTypes: ['reader'],

    getClassName: function() {
        return null;
    }
});
