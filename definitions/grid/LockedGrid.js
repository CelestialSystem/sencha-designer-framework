xds.component.Registry.addDefinition({
    override: "Ext.grid.LockedGrid",
    typeAlias: 'lockedGrid',

    transformGroup: null,

    toolbox: {
        name: 'Locked Grid',
        iconCls: 'icon-grid',
        category: 'Grid',
        groups: ['Grids','Views']
    },

    cfgs: [{
        name: 'columns',
        merge: false,
        displayName: 'Columns',
        type: 'refgroup',
        refSelector: 'gridcolumn',
        createTypes: ['booleancolumn', 'gridcolumn', 'datecolumn', 'numbercolumn', 'checkcolumn', 'rownumberer']
    }, {
        name: 'plugins',
        displayName: 'Grid Plugins',
        type: 'refgroup',
        refSelector: '{isPlugin()}',
        createTypes: ['gridviewoptions', 'gridcolumnresizing', 'grideditable', 'rowoperations', 'gridpagingtoolbar', 'gridsummaryrow', 'gridexporterplugin', 'gridrowexpander', 'gridcellediting', 'gridclipboardplugin'],
        alternates: [{
            displayName: 'plugins',
            name: 'plugins',
            type: 'array'
        }]
    }, {
        name: 'columnMenu',
        merge: true,
        type: 'refgroup',
        refSelector: 'menuitem',
        createTypes: ['gridsortascmenuitem', 'gridsortdescmenuitem', 'gridgroupbythismenuitem', 'gridshowingroupsmenuitem'],
        alternates: [{
            type: 'object'
        }]
    }, {
        name: 'store',
        merge: false,
        type: 'store',
        alternates: [{
            type: 'object'
        }]
    }],

    presetColumns: [{
        type: 'gridcolumn',
        data: {
            text: 'String',
            dataIndex: 'string',
            width: 70,
            locked: true
        }
    }, {
        type: 'numbercolumn',
        data: {
            text: 'Number',
            dataIndex: 'number',
            width: 89,
            locked: 'right'
        }
    }, {
        type: 'datecolumn',
        data: {
            text: 'Date',
            dataIndex: 'date',
            width: 89
        }
    }, {
        type: 'booleancolumn',
        data: {
            text: 'Boolean',
            dataIndex: 'bool',
            width: 70
        }
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on({
            actionmenu : me.onActionMenu,
            addchild : me.onAddChild,
            beforeremovechild: me.onBeforeRemoveChild,
            scope: me
        });
    },

    onSetup: function() {
        var me = this;
        me.createChild(me.presetColumns);
        // Let's set default height and width so the grid is not shrink when no layout is selected which is default state
        me.setCfgValue({
            height: '100%',
            width: '100%'
        });
    },

    onActionMenu: function() {
        var me = this;

        if (!me.actions) {
            me.actions = [
                new Ext.Action({
                    itemId: 'auto-columns',
                    text: 'Grid Builder',
                    iconCls: 'icon-auto-columns',
                    order: -3,
                    handler: function() {
                        xds.helpers.Manager.openHelper('GridView', {
                            values: {
                                instance: me
                            },
                            open: function() {
                                var field = this.fields.selectedModel,
                                    selectedModel = field.getValue();
                                if (selectedModel) {
                                    field.importFields(selectedModel);
                                }
                            }
                        });
                    },
                    hideWhen: function(instance) {
                        return instance.is('propertygrid') || instance.is('pivotgrid');
                    },
                    scope: me
                })
            ];
        }

        return me.actions;
    },

    onAddChild: function(child) {
        if (child.hasCfg('docked')) {
            child.setCfgValue('docked', null);
        }
    },

    onBeforeRemoveChild: function(child) {
        var me = this;

        if (child.isType('gridcolumn') && me.query('> gridcolumn').length === 1) {
            return false;
        }
    }
});
