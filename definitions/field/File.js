xds.component.Registry.addDefinition({
    override: "Ext.field.File",
    typeAlias: "filefield",

    "autoName": "MyFileField",
    "toolbox": {
        "name": "File Field",
        iconCls: 'icon-fileupload',
        category: 'Form Fields',
        groups: ['Forms','Views']
    }

});
