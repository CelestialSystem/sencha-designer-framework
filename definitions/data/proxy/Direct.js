xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Direct",
    typeAlias: 'directproxy',

    toolbox: {
        name: 'Direct Proxy',
        iconCls: 'icon-direct-proxy',
        category: 'Data Proxies',
        groups: ['Data']
    },
    autoName: 'MyDirectProxy',

    cfgs: [{
        name: "api",
        merge: true,
        encodeType: 'raw'
    }, {
        name: 'directFn',
        merge: true,
        type: 'direct'
        // ,
        // // use raw type so that strings as well as functions are codegened(via encodeRaw) without the quotes
        // encodeType: 'raw'
    }],

    init: function() {
        var me = this;
        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('coderequires', me.onCodeRequires, me);
    },

    isConfiguredForLoad: function() {
        return this.isCfgSet('directFn') || this.isCfgSet('api');
    },

    getLoadFailureMessage: function(storeDef) {
        return xds.app.Resource.get('storeLoad').failureDirect;
    },

    onCodeRequires: function() {
        var directApiResource = xds.component.Registry.getRootInstance('resource').child('directresource'),
            requires = [];

        if (directApiResource) {
            requires.push(directApiResource.getQualifiedClassName());
        }
        return requires;
    }
});