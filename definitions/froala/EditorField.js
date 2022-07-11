xds.component.Registry.addDefinition({
    "type": "Ext.froala.EditorField",
    "className": "Ext.froala.EditorField",
    "classAlias": "widget.froalaeditorfield",
    "inherits": "Ext.field.Container",
    "autoName": "MyFroalaEditorField"
});
xds.component.Registry.addDefinition({
    override: "Ext.froala.EditorField",
    typeAlias: 'froalaeditorfield',
    toolbox: {
        name: 'Froala Editor Field',
        iconCls: 'icon-editor',
        category: 'Froala Editor',
        groups: ['Views']
    },
    autoName: 'MyFroalaEditorField'
});
