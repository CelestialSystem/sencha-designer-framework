xds.component.Registry.addDefinition({
    override: 'Ext.data.BufferedStore',
    typeAlias: 'bufferedstore',

    toolbox: {
        name: 'Buffered Store',
        iconCls: 'icon-store',
        category: 'Data Stores',
        groups: ['Data']
    },
    transformGroup: 'flatstores',

    cfgs: [{
        name: 'designer|extend',
        merge: true,
        defaultValue: 'Ext.data.BufferedStore'
    }],

    ignoreCfgs: [
        'data', //local data is not allowed in buffered stores
        'remoteFilter', //raises error if changed
        'remoteSort' //raises error if changed
    ],

    init: function() {
        this.on('codeconfig', this.onCodeConfig, this);
    },

    onCodeConfig: function(config) {
        // If we're not at the top level, we need the type property to tell it what
        // kind of store to instantiate.
        if (!this.isTop()) {
            config.configs.unshift({
                name: 'type',
                type: 'string',
                primitive: true,
                rawValue: 'buffered',
                value: 'buffered'
            });
        }
        return config;
    }

});
