xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Column",
    typeAlias: "gridcolumn",

    toolbox: {
        name: "Column",
        iconCls: "icon-grid-column",
        category: "Grid Columns",
        groups: ["Grids"]
    },
    transformGroup: 'columns',

    cfgs: [{
        name: 'dataIndex',
        merge: false,
        type: 'datafield',
        required: true,
        storeOwnerSelector: '^grid'
    },{
        name: 'text',
        merge: true,
        defaultValue: ''
    },{
        name: 'summaryRenderer',
        merge: true,
        injectInCanvas: true,
        allowOnViewController: true
    },{
        name: 'cell',
        merge: true,
        type: 'refgroup',
        refSelector: 'basecell',
        createTypes: ['booleancell', 'checkcell', 'datecell', 'numbercell', 'rownumberercell', 'textcell', 'treecell', 'widgetcell'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    },{
        "name": "exportRenderer",
        merge: true,
        "alternates": [
            {
                "type": "function",
                "params": [
                    {
                        "name": "value",
                        "type": "Object"
                    },
                    {
                        "name": "metaData",
                        "type": "Object"
                    },
                    {
                        "name": "record",
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
                    },
                    {
                        "name": "view",
                        "type": "Ext.view.View"
                    }
                ]
            },
            {
                "type": "string"
            }
        ]
    }, {
        "name": "exportSummaryRenderer",
        merge: true,
        "alternates": [
            {
                "type": "function",
                "params": [
                    {
                        "name": "value",
                        "type": "Object"
                    },
                    {
                        "name": "metaData",
                        "type": "Object"
                    },
                    {
                        "name": "record",
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
                    },
                    {
                        "name": "view",
                        "type": "Ext.view.View"
                    }
                ]

            },
            {
                "type": "string"
            }
        ]
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);

        me.setReference({ name: 'columns', type: 'array' });
    },

    onSetup: function() {
        var me = this;

        if (!me.isCfgSet('text')) {
            me.setCfgValue('text', me.getName());
        }
        if (!me.isCfgSet('width')) {
            me.setCfgValue('width', 80);
        }
    }
});
