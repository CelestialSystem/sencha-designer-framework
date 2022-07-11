xds.layouts.Form = {
    type: 'form',
    xcls: 'Ext.layout.container.Form',
    text: 'Form Layout',

    cfgs: [{
        name: 'form',
        type: 'string'
    }],
    
    layoutCfgs: [{
        name: 'childEls',
        type: 'object'
    },{
        name: 'itemCls',
        type: 'string'
    },{
        name: 'itemSpacing',
        type: 'number'
    },{
        name: 'labelWidth',
        type: 'number'
    },{
        name: 'reserveScrollbar',
        type: 'boolean'
    }]
};
xds.component.Registry.addLayout(xds.layouts.Form);