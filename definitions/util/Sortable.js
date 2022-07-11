xds.component.Registry.addDefinition({
    override: "Ext.util.Sortable",
    typeAlias: 'util-sortable',

    // classLevel for reverse class grouping in property grid. Assigning it < 1 makes it shows after the base class level which is 1
    classLevel: 0.4,

    validChildTypes: ['sorter'],

    cfgs: [{
        name: 'defaultSortDirection',
        merge: true,
        editor: 'options',
        options: [
            'ASC',
            'DESC'
        ]
    }, {
        name: 'sorters',
        displayName: 'Sorters',
        merge: false,
        type: 'refgroup',
        refSelector: '[type=Ext.util.Sorter]', //exclude groupers which extend sorter
        createTypes: ['sorter']
    }]
});
