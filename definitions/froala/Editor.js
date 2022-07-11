xds.component.Registry.addDefinition({
    override: "Ext.froala.Editor",
    typeAlias: 'froalaeditor',
    toolbox: {
        name: 'froala Editor',
        iconCls: 'icon-editor',
        category: 'Froala Editor',
        groups: ['Views']
    },
    autoName: 'MyFroalaEditor',
    eventsFiredOnParent: [
        'change',
        'ready'
    ]
});
