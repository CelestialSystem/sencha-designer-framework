xds.component.Registry.addDefinition({
    override: "Ext.form.Basic",

    cfgs: [{
        name: 'api',
        merge: true,
        encodeType: 'raw'
    }, {
        name: 'errorReader',
        merge: false,
        type: 'formreader'
    }, {
        name: 'reader',
        merge: false,
        type: 'formreader'
    }]
});
