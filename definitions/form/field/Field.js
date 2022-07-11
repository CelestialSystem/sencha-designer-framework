xds.component.Registry.addDefinition({
    override: "Ext.form.field.Field",
    typeAlias: 'field',

    cfgs: [{
        name: 'name',
        merge: true,
        regex: xds.Resource.get('validName').regex,
        regexText: xds.Resource.get('validName').regexText
    }]
});