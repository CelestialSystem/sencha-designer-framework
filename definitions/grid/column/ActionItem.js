xds.component.Registry.addDefinition({
    type: 'actioncolumnitem',
    toolbox: {
        name: 'Action Column Item',
        iconCls: 'icon-grid-action-item',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyActionColumnItem',
    validParentTypes: ['actioncolumn'],
    validChildTypes: [],
    inherits: 'baseview',

    basicCfgs: ['disabled', 'handler'],
    cfgs: [{
        name: 'altText',
        type: 'string'
    }, {
        name: 'disabled',
        type: 'boolean'
    }, {
        name: 'getClass',
        type: 'function',
        params: [
            {
                "name": "v",
                "type": "Object"
            },
            {
                "name": "metadata",
                "type": "Object"
            },
            {
                "name": "r",
                "type": "Ext.data.Model"
            },
            {
                "name": "rowIndex",
                "type": "Number"
            },
            {
                "name": "colIndex",
                "type": "Number"
            },
            {
                "name": "store",
                "type": "Ext.data.Store"
            }
        ],
        injectInCanvas: true
    }, {
        name: 'handler',
        type: 'function',
        params: [
            {
                "name": "view",
                "type": "Ext.view.Table"
            },
            {
                "name": "rowIndex",
                "type": "Number"
            },
            {
                "name": "colIndex",
                "type": "Number"
            },
            {
                "name": "item",
                "type": "Object"
            },
            {
                "name": "e",
                "type": "Ext.EventObject"
            },
            {
                "name": "record",
                "type": "Ext.data.Model"
            },
            {
                "name": "row",
                "type": "HTMLElement"
            }
        ],
        allowOnViewController: true,
        alternates: [
            {
                type: 'string'
            }
        ]
    }, {
        name: 'icon',
        type: 'string'
    }, {
        name: 'iconCls',
        type: 'string'
    }, {
        name: 'tooltip',
        type: 'string'
    }, {
        "name": "isActionDisabled",
        "type": "function",
        "params": [
            {
                "name": "view",
                "type": "Ext.view.Table"
            },
            {
                "name": "rowIndex",
                "type": "Number"
            },
            {
                "name": "colIndex",
                "type": "Number"
            },
            {
                "name": "item",
                "type": "Object"
            },
            {
                "name": "record",
                "type": "Ext.data.Model"
            }
        ]
    }]
});
