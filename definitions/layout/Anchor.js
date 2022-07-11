xds.layouts.Anchor = {
    type: 'anchor',
    xcls: 'Ext.layout.container.Anchor',
    text: 'Anchor Layout',

    cfgs: [{
        name: 'anchor',
        type: 'string'
    }],
    
    layoutCfgs: [{
        name: 'manageOverflow',
        type: 'number',
        editor: 'options',
        options: [0, 1, 2],
        defaultValue: 2
    }]
};
xds.component.Registry.addLayout(xds.layouts.Anchor);