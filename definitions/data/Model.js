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

    validChildTypes: ['datafield', 'proxy', 'datavalidation', 'association', 'basicfunction'],
    singleChildTypes: ['proxy'],

    // members ignored by Class.js
    reservedCfgs: ['items', 'fields', 'proxy', 'validations', 'belongsTo', 'hasMany', 'hasOne'],

    ignoreCfgs: [
        'customEventsRefGroup', //event bindings not allowed
        'eventsRefGroup' //event bindings not allowed
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
            type: 'refgroup',
            refSelector: 'datafield',
            createTypes: ['datafield']
        }, {
        name: 'proxy',
        merge: false,
        type: 'refgroup',
        refSelector: 'proxy',
        createTypes: ['ajaxproxy', 'directproxy', 'jsonpproxy', 'localstorageproxy', 'memoryproxy', 'restproxy', 'sessionstorageproxy', 'Ext.data.proxy.Sql'],
        max: 1
    }]
});
