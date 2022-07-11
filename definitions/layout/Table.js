xds.layouts.Table = {
    type:'table',
    xcls:'Ext.layout.container.Table',
    text: 'Table Layout',

    cfgs: [{
        name: 'cellId',
        type: 'string'
    },{
        name: 'cellCls',
        type: 'string'
    },{
        name: 'colspan',
        type: 'number'
    },{
        name: 'rowspan',
        type: 'number'
    }],

    "eventDefs": [],

    layoutCfgs : [{
        name: 'columns',
        type: 'number'
    },{
        name: 'tableAttrs',
        type: 'object'
    },{
        name: 'trAttrs',
        type: 'object'
    },{
        name: 'tdAttrs',
        type: 'object'
    }]
};
xds.component.Registry.addLayout(xds.layouts.Table);