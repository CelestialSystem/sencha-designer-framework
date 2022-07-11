xds.component.Registry.addDefinition({
    override: "Ext.data.NodeStore",
    typeAlias: 'nodestore',

    ignoreCfgs: [
        'node'
    ],

    cfgs: [{
        type: 'string',
        visibleOnlyAsTop: true,
        name: 'designer|extend',
        displayName: 'extend',
        defaultValue: 'Ext.data.NodeStore',
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validFileName').regex,
        regexText: xds.Resource.get('validFileName').regexText
    }, {
        // Have to redefine these overrides since NodeStore includes them in its docs.
        // TODO should they be in the docs?
        name: 'filters',
        displayName: 'Filters',
        type: 'refgroup',
        refSelector: 'filter',
        createTypes: ['filter']
    }, {
        name: 'sorters',
        displayName: 'Sorters',
        type: 'refgroup',
        refSelector: '[type=Ext.util.Sorter]', //exclude groupers which extend sorter
        createTypes: ['sorter']
    }]
});