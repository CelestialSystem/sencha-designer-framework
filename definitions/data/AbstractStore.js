xds.component.Registry.addDefinition({
    override: "Ext.data.AbstractStore",
    typeAlias: 'abstractstore',
    mixin: ['basedata', 'storebehavior'],

    validChildTypes: ['basicfunction', 'grouper', 'sorter', 'filter'],

    // Using createAlias on a viewmodel store leads to problems if the store has a
    // storeId, which ours always do. Disabling for now.
    ignoreCreateCfgs: true,

    cfgs: [{
        name: 'filters',
        merge: false,
        displayName: 'Filters',
        type: 'refgroup',
        refSelector: 'filter',
        createTypes: ['filter']
    }, {
        name: 'groupDir',
        merge: true,
        editor: 'options',
        options: [
            'ASC',
            'DESC'
        ]
    }, {
        name: 'grouper',
        displayName: 'Grouper',
        merge: false,
        type: 'refgroup',
        refSelector: 'grouper',
        createTypes: ['grouper'],
        max: 1
    }, {
        name: 'groupField',
        merge: false,
        type: 'datafield'
    }, {
        // Ext50's AbstractStore redefines the sorters config which clobbers our custom
        // cfg from Sortable. This is copied over from Sortable.
        name: 'sorters',
        displayName: 'Sorters',
        merge: false,
        type: 'refgroup',
        refSelector: '[type=Ext.util.Sorter]', //exclude groupers which extend sorter
        createTypes: ['sorter']
    }, {
        name: 'storeId',
        merge: true,
        visibleOnlyAsTop: true //doesn't make sense in a viewmodel store
    }]

});