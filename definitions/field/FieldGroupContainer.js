xds.component.Registry.addDefinition({
    override: 'Ext.field.FieldGroupContainer',
    typeAlias: 'groupcontainer',
    autoName: 'MyGroupContainer',

    toolbox: {
        name: 'Group Container',
        iconCls: 'icon-container',
        category: 'Containers',
        groups: ['Forms', 'Views', 'Containers']
    },

    validChildTypes: null
});
