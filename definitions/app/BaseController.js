xds.component.Registry.addDefinition({
    override: "Ext.app.BaseController",

    validChildTypes: ['controlleraction', 'basicfunction', '!customevent'],

    disablePromoteToClass: true,
    // Disables duplication of this object from inspector
    disableDuplication: true,
    // Disables Transform menu from inspector
    disableTransform: true,

    defaultActionId: 'viewCode',

    ignoreCfgs: [
        'application',
        'customEventsRefGroup',
        'eventsRefGroup'
    ],

    cfgs: [{
        name: 'control',
        merge: false,
        bindable: true,
        displayName: 'Actions',
        type: 'refgroup',
        refSelector: '[type=controlleraction],[type=applicationaction]',
        createTypes: ['controlleraction', 'applicationaction']
    }]
});
