xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Column",
    typeAlias: 'gridcolumn',

    toolbox: {
        name: 'Column',
        iconCls: 'icon-grid-column',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    transformGroup: 'columns',
    fullscreenAtTopLevel: false,

    validParentTypes: ['tablepanel', 'headercontainer'],
    validChildTypes: ['basefield', 'gridcolumn', 'basecolumnfilter'],
    singleChildTypes: ['basefield', 'basecolumnfilter'],

    basicCfgs: ['align', 'dataIndex', 'hideable', 'sortable', 'renderer', '!layout'],
    ignoreCfgs: [
        'activeItem',
        'autoScroll',
        'columns', // handled as child refs
        'componentLayout',
        'scope'
    ],

    cfgs: [{
        name: "align",
        editor: "combo",
        merge: true
    },{
        name: 'dataIndex',
        merge: false,
        type: 'datafield',
        required: true,
        storeOwnerSelector: '^tablepanel'
    }, {
        name: 'editor',
        merge: false,
        type: 'refgroup',
        refSelector: 'basefield',
        createTypes: [
            'checkboxfield', 'combobox', 'datefield', 'numberfield', 'radiofield',
            'textfield', 'textareafield', 'timefield', 'triggerfield'
        ]
    }, {
        name: 'editRenderer',
        merge: true,
        allowOnViewController: true
    }, {
        // Provided by HeaderContainer's HBox layout
        // TODO should we define layout on HeaderContainer so this is added via the normal mechanism?
        name: 'flex',
        type: 'number'
    }, {
        name: 'renderer',
        merge: true,
        injectInCanvas: true,
        allowOnViewController: true
    }, {
        name: 'tooltipType',
        merge: true,
        editor: 'options',
        options: ['qtip', 'title']
    }, {
        // Columns that are grouped should have a "sortable" value of true whereas
        // columns that are not default to false - so in this case we need to avoid
        // setting a default so that codegen outputs a value no matter what.
        name: 'sortable',
        merge: true,
        defaultValue: null
    }, {
        name: 'filter',
        type: 'refgroup',
        refSelector: 'basecolumnfilter',
        createTypes: [
            'booleanfilter', 'datefilter', 'listfilter', 'numberfilter', 'stringfilter'
        ],
        max: 1
    },{
        name: 'summaryRenderer',
        merge: true,
        params: ['val', 'params', 'data', 'metaData'],
        injectInCanvas: true,
        allowOnViewController: true
    },{
        name: 'updater',
        merge: false,
        type: 'function',
        params: [{
            name: 'cell',
            type: 'HTMLElement'
        }, {
            name: 'value',
            type: 'Object'
        }, {
            name: 'record',
            type: 'Ext.data.Model'
        }, {
            name: 'view',
            type: 'Ext.view.View'
        }],
        allowOnViewController: true
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

    inlineEdit: [{
        cfg: 'text',
        textEl: '.x-column-header-text',
        dblClickEl: '*'
    }],


    init: function() {
        var me = this;

        me.on({
            addchild: me.onAddChild,
            restorechild: me.onRestoreChild,
            removechild: me.onRemoveChild,
            resizehandles: me.onResizeHandles,
            transform: me.onTransform,
            scope: me
        });
        me.ex('setup', me.onSetup, me);
        me.setReference({ name: 'columns', type: 'array' });
    },

    onSetup: function() {
        var me = this;

        if (!me.isCfgSet('text') && !me.is('rownumberer')) {
            me.setCfgValue('text', me.getName());
        }
    },

    onAddChild: function(child) {
        // if adding a child column, ExtJS 5 will throw an exception if
        // this column has a dataIndex - so we most remove that config.
        if (child.isType('gridcolumn')) {
            this.removeCfg('dataIndex');
        }

        if (child.isType('basefield')) {
            child.setReference('editor');

            // A newly created field will get a default fieldLabel assigned, but we don't
            // want that here since it breaks the editor layout, so unset it.
            child.on('aftercreate', function() {
                child.setCfgValue('fieldLabel', undefined);
            }, child, {single: true});
        }
        
        if (child.isType('gridcolumn')) {
            this.up('panel').addSummaryProperties(child);
        }
    },

    onRemoveChild: function(child) {
        var childColumns = this.query('gridcolumn');

        // if there are no more column children, we can have a dataIndex config again
        if (childColumns.length === 0) {
            this.addCfg({
                name: 'dataIndex',
                type: 'datafield',
                required: true,
                storeOwnerSelector: '^tablepanel'
            });
        }

        if (child.isType('basefield')) {
            child.setReference();
        }
    },

    onRestoreChild: function(child) {
        // if adding a child column, ExtJS 5 will throw an exception if
        // this column has a dataIndex - so we most remove that config.
        if (child.isType('gridcolumn')) {
            this.removeCfg('dataIndex');
        }
    },

    onResizeHandles: function(side) {
        return side === 'Right';
    },

    onTransform: function(me, toType, snapshot) {
        var renderer = this.down('fixedfunction[fnName="renderer"]');
        if (toType !== "column" && renderer) {
            renderer.remove();
        }
    }
});
