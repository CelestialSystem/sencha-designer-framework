xds.component.Registry.addDefinition({
    override: "Ext.view.BoundList",
    typeAlias: 'boundlist',

    toolbox: {
        name: 'Bound List',
        iconCls: 'icon-bound-list',
        category: 'Views',
        groups: ['Views']
    },
    validParentTypes: ['combobox'],

    cfgs: [{
        name: 'tpl',
        merge: false,
        type: 'template'
    }]
});