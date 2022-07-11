xds.layouts.Container = {
    type: 'container',
    xcls: 'Ext.layout.container.Container',
    text: 'Container Layout',
    cfgs: [],
    layoutCfgs: [{
        name: 'manageOverflow',
        type: 'number',
        editor: 'options',
        options: [0, 1, 2],
        defaultValue: 0
    }, {
        name: 'reserveScrollbar',
        type: 'boolean',
        defaultValue: false
    }],
    hidden: true
};
xds.component.Registry.addLayout(xds.layouts.Container);