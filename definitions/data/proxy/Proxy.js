xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Proxy",
    typeAlias: 'proxy',

    // Pull in shared behavior logic
    mixin: ['basedata', 'proxybehavior'],

    validParentTypes: ['storebase', 'datamodel'],
    validChildTypes: ['reader', 'writer'],
    singleChildTypes: ['reader', 'writer'],
    transformGroup: 'dataproxies',
    disableDuplication: true,

    obscureCfgs: ['batchOrder'],
    ignoreCfgs: [
        'model'
    ],

    cfgs: [{
        name: 'reader',
        merge: false,
        displayName: 'reader',
        type: 'refgroup',
        refSelector: 'reader',
        createTypes: ['arrayreader', 'jsonreader', 'xmlreader'],
        max: 1,
        alternates: [
            {
                displayName: 'reader',
                type: 'string'
            },{
                displayName: 'reader',
                type: 'object'
            }
        ]
    }, {
        name: 'writer',
        merge: false,
        displayName: 'writer',
        type: 'refgroup',
        refSelector: 'writer',
        createTypes: ['jsonwriter', 'xmlwriter'],
        max: 1,
        alternates: [
            {
                displayName: 'writer',
                type: 'string'
            },{
                displayName: 'writer',
                type: 'object'
            }
        ]
    }]
});