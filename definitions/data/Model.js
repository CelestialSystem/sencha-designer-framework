xds.component.Registry.addDefinition({
    override: 'Ext.data.Model',
    typeAlias: 'datamodel',
    mixin: ['basemodel', 'datamodelbehavior'],

    toolbox: {
        name: 'Model',
        iconCls: 'icon-model',
        category: 'Data Models',
        groups: ['Data','Models']
    },

    validChildTypes: ['datafield', 'proxy', 'datavalidation', 'association', 'idgenerator', 'basicfunction'],
    singleChildTypes: ['proxy', 'idgenerator'],

    // members ignored by Class.js
    reservedCfgs: ['items', 'fields', 'proxy', 'validations', 'belongsTo', 'hasMany', 'hasOne', 'manyToMany', 'idgen'],

    ignoreCfgs: [
        'customEventsRefGroup', //event bindings not allowed
        'eventsRefGroup', //event bindings not allowed
        'defaultProxyType' //not exposed since any proxy we add will have a type
    ],

    cfgs: [{
        name: 'hasMany',
        merge: true,
        alternates: [{
            type: 'refgroup',
            refSelector: 'schemahasmany',
            createTypes: ['schemahasmany']
        }]
    }, {
        name: 'hasOne',
        merge: true,
        alternates: [{
            type: 'refgroup',
            refSelector: 'schemahasone',
            createTypes: ['schemahasone']
        }]
    }, {
        name: 'manyToMany',
        merge: false,
        type: 'object'
    }, {
        name: 'belongsTo',
        merge: true,
        alternates: [{
            type: 'refgroup',
            refSelector: 'schemabelongsto',
            createTypes: ['schemabelongsto']
        }]
    }, {
        name: 'fields',
        merge: false,
        displayName: 'Fields',
        type: 'refgroup',
        refSelector: 'datafield',
        createTypes: ['datafield']
    }, {
        name: 'proxy',
        merge: false,
        displayName: 'Proxy',
        type: 'refgroup',
        refSelector: 'proxy',
        createTypes: ['ajaxproxy', 'directproxy', 'jsonpproxy', 'localstorageproxy', 'memoryproxy', 'restproxy', 'sessionstorageproxy'],
        max: 1
    }, {
        // We only allow configuring `schema` as its string form, which points to the userAlias
        // of a Schema class defined at the top-level. While the framework allows defining a schema
        // inline, that really only works if you don't try to share a schema between multiple models,
        // or if you define it on a base Model superclass which Architect doesn't support yet. For
        // now we'll limit it so we prevent users from getting into confusing situations.
        name: 'schema',
        merge: true,
        type: 'schema'
    }]

});