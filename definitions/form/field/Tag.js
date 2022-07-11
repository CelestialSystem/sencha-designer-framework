xds.component.Registry.addDefinition({
    override: "Ext.form.field.Tag",
    typeAlias: 'tagfield',

    toolbox: {
        name: 'Tag Field',
        iconCls: 'icon-numfield',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },
    autoName: 'MyTagField'
});