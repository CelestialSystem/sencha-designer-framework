xds.component.Registry.addDefinition({
    override: "Ext.form.field.ComboBox",
    typeAlias: 'combobox',

    toolbox: {
        name: 'ComboBox',
        iconCls: 'icon-combobox',
        category: 'Form Fields',
        groups: ['Forms','Views']
    },

    validChildTypes: ['boundlist', 'trigger'],
    singleChildTypes: ['boundlist'],

    obscureCfgs: ['transform', 'triggerCls', 'multiSelect'],
    ignoreCfgs: [
        'componentLayout',
        'defaultListConfig',
        'inputType'
    ],
    cfgs: [{
        name: 'listConfig',
        merge: false,
        type: 'refgroup',
        refSelector: 'boundlist',
        createTypes: ['boundlist'],
        max: 1
    }, {
        name: 'queryMode',
        merge: true,
        editor: 'options',
        options: ['local', 'remote']
    }, {
        name: 'store',
        merge: true,
        type: 'store',
        codeValueConfigName: 'designer|userClassName'
    }, {
        name: 'triggerAction',
        merge: true,
        editor: 'options',
        options: ['all', 'query', 'last']
    }, {
        name: 'valueField',
        merge: true,
        type: 'datafield'
        // defaults to match value of 'displayField'
    },{
        name: 'displayField',
        merge: true,
        type: 'datafield'
    },{
        name: 'value',
        type: 'object',
        alternates: [{
            type: 'string'
        },{
            type: 'number'
        }]
    },
    // marked "deprecated" in 5.1, but it's really more of a "not preferred", so
    // we'll preserve this config in 5.1
    {
        "name": "multiSelect",
        "type": "boolean",
        "defaultValue": false
    }],


    init: function() {
        var me = this;
        me.ex('addchild', me.onAddChild, me);
    },

    onAddChild: function(child) {
        if (child.isType('boundlist')) {
            child.setReference('listConfig');
        }
    }

});
