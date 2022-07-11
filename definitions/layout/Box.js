xds.layouts.Box = {
    type: 'box',
    xcls: 'Ext.layout.Box',
    text: 'Box Layout',

    cfgs: [],

    layoutCfgs : [
        {
            name: 'align',
            type: 'string',
            editor: 'options',
            options: ['start', 'center', 'end', 'stretch']
        },
        {
            name: 'pack',
            type: 'string',
            editor: 'options',
            options: ['start', 'center', 'end', 'justify'],
            defaultValue: 'left'
        },
        {
            name: 'overflow',
            type: 'string',
            alternates: [
                {
                    type: 'object'
                }
            ]
        },
        {
            name: 'reverse',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'vertical',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'wrap',
            type: 'boolean',
            defaultValue: false,
            alternates: [
                {
                    type: 'string'
                }
            ]
        }
    ]

};
xds.component.Registry.addLayout(xds.layouts.Box);