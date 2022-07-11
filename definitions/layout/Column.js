xds.layouts.Column = {
    type:'column',
    xcls:'Ext.layout.container.Column',
    text: 'Column Layout',

    cfgs: [{
        name: 'columnWidth',
        type: 'auto' //accepts string (e.g. percentage) or number
    }],

    "eventDefs": [],

    layoutCfgs: [{
        name: 'scrollOffset',
        type: 'number'
    }, {
        name: 'manageOverflow',
        type: 'number',
        editor: 'options',
        options: [0, 1, 2],
        defaultValue: 2
    }]
};
xds.component.Registry.addLayout(xds.layouts.Column);