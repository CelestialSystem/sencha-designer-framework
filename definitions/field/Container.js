xds.component.Registry.addDefinition({
    override: 'Ext.field.Container',
    typeAlias: 'containerfield',
    autoName: 'MyFieldContainer',

    toolbox: {
        name: 'Field Container',
        iconCls: 'icon-container',
        category: 'Containers',
        groups: ['Forms', 'Views', 'Containers']
    },

    validChildTypes: null
});
