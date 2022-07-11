xds.component.Registry.addDefinition({
    override: "Ext.data.ChainedStore",
    typeAlias: 'chainedstore',

    toolbox: {
        name: 'Chained Store',
        iconCls: 'icon-chained-store',
        category: 'Data Stores',
        groups: ['Data']
    },

    ignoreCfgs: [
        // the remote cfgs are forced to false and throw an error if set
        'remoteFilter',
        'remoteSort'
    ],

    cfgs: [{
        type: 'string',
        visibleOnlyAsTop: true,
        name: 'designer|extend',
        displayName: 'extend',
        defaultValue: 'Ext.data.ChainedStore',
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validFileName').regex,
        regexText: xds.Resource.get('validFileName').regexText
    }, {
        name: 'source',
        merge: false,
        type: 'store',
        bindable: true,
        codeValueConfigName: 'designer|userClassName'
    }],

    init: function() {
        this.on({
            beforeshowcfgoptions: this.onBeforeShowCfgOptions,
            beforecfgchange: this.onBeforeCfgChange,
            scope: this
        });
    },

    onBeforeShowCfgOptions: function(configName, options) {
        // Filter out this store from the source list, since we can't chain to ourselves
        if (configName === 'source') {
            for (var i = options.length; i--;) {
                if (options[i][0] !== this.getUserClassName()) {
                    options.slice(i, 1);
                    return;
                }
            }
        }
    },

    onBeforeCfgChange: function(name, value) {
        // Prevent setting its source to itself
        if (name === 'source') {
            var otherStore = this.flyCfg('source').findInstanceForValue(value);
            if (otherStore === this) {
                xds.ui.Ack.display(xds.Resource.get('chainedStore').recursion);
                return false;
            }
        }
    },

    /**
     * @override
     * Call through to the source store to list the fields
     */
    getFieldInstances: function() {
        var source = this.flyCfg('source').getValueInstance();
        return source ? source.getFieldInstances() : [];
    },

    /**
     * @override
     * Call through to the source store to get the model
     */
    getModelInstance: function() {
        var source = this.flyCfg('source').getValueInstance();
        return source ? source.getModelInstance() : null;
    },

    /**
     * @override
     * Call through to the source store to get the proxy
     */
    getProxyInstance: function() {
        var source = this.flyCfg('source').getValueInstance();
        return source ? source.getProxyInstance() : null;
    },

    /**
     * @override
     * Call through to the source store to get the reader
     */
    getReaderInstance: function() {
        var source = this.flyCfg('source').getValueInstance();
        return source ? source.getReaderInstance() : null;
    }

});