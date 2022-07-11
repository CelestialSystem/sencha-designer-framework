xds.component.Registry.addDefinition({
    override: "Ext.dashboard.Dashboard",
    typeAlias: 'dashboard',

    // TODO: This component is not yet ready, hiding from dashboard for now.
    // 
    // toolbox: {
    //     name: 'Dashboard',
    //     iconCls: 'icon-panel',
    //     category: 'Containers',
    //     groups: ['Views', 'Containers']
    // },

    cfgs: [{
        name: 'maxColumns',
        merge: false,
        type: 'number',
        defaultValue: 4
    }],

    init: function() {
        if (!this.getCfgValue('layout')) {
            this.setCfgValue('layout', 'column');
        }
    }
});