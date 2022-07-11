xds.component.Registry.addDefinition({
    override: "Ext.grid.Panel",
    typeAlias: 'gridpanel',

    toolbox: {
        name: 'Grid Panel',
        iconCls: 'icon-grid',
        category: 'Grid',
        groups: ['Grids','Views']
    },
    autoName: 'MyGridPanel',

    // Any component can be a child of a Table/Grid/Tree Panel
    // but it must to be docked in order to show
    // See TablePanel definition onAddChild event handler
    singleChildTypes: [
        'gridview',
        'tableview',
        'selectionmodel',
        '[type="Ext.grid.feature.Grouping"]',
        'groupingsummarygridfeature',
        'advancedgroupingfeature',
        'rowbodygridfeature',
        'summarygridfeature',
        'gridroweditingplugin',
        'gridcelleditingplugin',
        'gridheaderresizerplugin',
        'Ext.grid.plugin.BufferedRenderer',
        'advancedgroupingsummaryfeatureplugin',
        'advancedgroupingfeatureplugin',
        'groupingpanelplugin'
    ],
    nativeTypes: [
        'gridcolumn',
        'gridfeature',
        'gridbaseplugin',
        'headercontainer',
        'selectionmodel'
    ],

    basicCfgs: ['columnsRefGroup', 'featuresRefGroup', 'pluginsRefGroup'],

    ignoreCfgs: [
        'viewType' // handled by view child ref
    ],

    cfgs: [{
        name: 'columns',
        merge: false,
        displayName: 'Columns',
        type: 'refgroup',
        refSelector: 'gridcolumn',
        createTypes: ['actioncolumn', 'booleancolumn', 'gridcolumn', 'datecolumn', 'numbercolumn', 'templatecolumn', 'rownumberer']
    }, {
        name: 'plugins',
        displayName: 'Grid Plugins',
        type: 'refgroup',
        refSelector: 'abstractplugin',
        createTypes: ['Ext.grid.plugin.BufferedRenderer',
            'gridcelleditingplugin',
            'gridroweditingplugin',
            'Ext.grid.filters.Filters',
            'gridexporterplugin',
            'gridclipboardplugin',
            'gridrowwidgetplugin',
            'gridrowexpander',
            'gridautoselector',
            'gridfilterbar',
            'gridsummaries',
            'groupingpanelplugin'],
        alternates: [{
            displayName: 'plugins',
            name: 'plugins',
            type: 'array'
        }]
    }],

    presetColumns: [{
        type: 'gridcolumn',
        data: {
            text: 'String',
            dataIndex: 'string'
        }
    }, {
        type: 'numbercolumn',
        data: {
            text: 'Number',
            dataIndex: 'number'
        }
    }, {
        type: 'datecolumn',
        data: {
            text: 'Date',
            dataIndex: 'date'
        }
    }, {
        type: 'booleancolumn',
        data: {
            text: 'Boolean',
            dataIndex: 'bool'
        }
    }],

    init: function() {
        var me = this;

        me.on({
            actionmenu: me.onActionMenu,
            beforeremovechild: me.onBeforeRemoveChild,
            cfgchange: me.onCfgChange,
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            restore: me.onRestore,
            restorechild: me.onRestoreChild,
            scope: me
        });
        me.ex('setup', me.onSetup, me);
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

    onBeforeRemoveChild: function(child) {
        var me = this;

        if (child.isType('gridcolumn') && me.query('> gridcolumn').length === 1) {
            return false;
        }
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        me.setCfgValue('title', 'My Grid Panel');
        if (!parent) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }

        me.createChild(me.presetColumns);
        me.createChild('tableview');
    },

    onAddChild: function(child) {

        if (child.isType('Ext.grid.feature.AbstractSummary')) {
            this.addSummaryProperties();
        } else if (child.isType('gridcolumn')) {
            this.addSummaryProperties(child);
        }

    },

    onRestoreChild: function(child) {
        if (child.isType('Ext.grid.feature.AbstractSummary')) {
            this.addSummaryProperties();
        } else if (child.isType('gridcolumn')) {
            this.addSummaryProperties(child);
        }       
    },

    onRestore: function() {
        this.addSummaryProperties();
    },

    hasSummaryGridFeature: function() {
        return Ext4.Array.some(this.children(), function(child) {
            return child.isType('Ext.grid.feature.AbstractSummary');
        });
    },

    // if you pass a specific child it will add to that child only
    // otherwise will get all children
    addSummaryProperties: function(child) {
        var me = this,
            children;
        if (me.hasSummaryGridFeature()) {
            children = child ? [child] : me.query('gridcolumn');
            children.each(function(child) {
                if (child.isType('gridcolumn') && !child.hasCfg('summaryType')) {
                        child.addCfg({
                            name: 'summaryType',
                            type: 'string',
                            editor: 'options',
                            options: [
                                'count',
                                'sum',
                                'min',
                                'max',
                                'average'
                            ]
                        });
                }
            });
        }
    },

    onRemoveChild: function(childInstance) {
        var me = this,
            gridColumns;
        if (!this.hasSummaryGridFeature()) {
            gridColumns = me.query('gridcolumn');
            gridColumns.each(function(child) {
                if (child.isType('gridcolumn') && child.hasCfg('summaryType')) {
                    child.removeCfg('summaryType');
                }
                if (child.isType('gridcolumn') && child.hasCfg('summaryRenderer')) {
                    child.removeCfg('summaryRenderer');
                }
            });
        }
    }
});
