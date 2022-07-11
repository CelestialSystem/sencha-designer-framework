xds.component.Registry.addDefinition({
    override: "Ext.ux.form.MultiSelect",
    typeAlias: 'multiselectfield',

    toolbox: {
        name: 'Form MultiSelect',
        iconCls: 'icon-combobox',
        category: 'Form Fields',
        groups: ['Views']
    },

    cfgs: [{
        name: 'store',
        merge: true,
        type: 'store',
        codeValueConfigName: 'designer|userClassName'
    }]
});
