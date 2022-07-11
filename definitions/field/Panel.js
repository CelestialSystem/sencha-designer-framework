xds.component.Registry.addDefinition({
    override: 'Ext.field.Panel',
    typeAlias: 'fieldpanel',
    autoName: 'MyFieldPanel',

    toolbox: {
        name: 'Field Panel',
        iconCls: 'icon-panel',
        category: 'Containers',
        groups: ['Forms', 'Views', 'Containers']
    }
});
