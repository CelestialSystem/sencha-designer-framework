xds.layouts.Vbox = {
    type: 'vbox',
    xcls: 'Ext.layout.Vbox',
    text: 'Vbox Layout',

    cfgs: [
        {
            name: 'flex',
            type: 'number'
        }
    ],

    layoutCfgs : [
        {
            name: 'align',
            type: 'string',
            editor: 'options',
            options: ['start', 'center', 'end', 'stretch', 'stretchmax'],
            defaultValue: 'stretch'
        },
        {
            name: 'pack',
            type: 'string',
            editor: 'options',
            options: ['start', 'center', 'end', 'justify'],
            defaultValue: 'start'
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

xds.component.Registry.addLayout(xds.layouts.Vbox);
