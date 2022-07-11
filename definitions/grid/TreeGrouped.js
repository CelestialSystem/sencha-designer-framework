xds.component.Registry.addDefinition({
    override: "Ext.grid.TreeGrouped",
    typeAlias: 'treegroupedgrid',
    xtype: 'treegroupedgrid',

    toolbox: {
        name: 'Tree Group Grid',
        iconCls: 'icon-grouping-feature',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyTreeGrouped',

    cfgs: [{
        name: 'store',
        type: 'store',
        bindable: true,
        noneStore: '(treegrouped-none)',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }],

    singleChildTypes: ['gridsummariesplugin','groupingpanelplugin'],

    eventsFiredOnGrid: [
        'beforegroupSummaryPositionchange', 
        'beforesummaryPositionchange', 
        'groupcontextmenu', 
        'groupdoubletap', 
        'groupsingletap', 
        'groupsummarycontextmenu', 
        'groupsummarydoubletap', 
        'groupSummaryPositionchange', 
        'groupsummarysingletap', 
        'groupsummarytap',
        'groupsummarytaphold',
        'grouptap',
        'grouptaphold',
        'summaryPositionchange'
    ],

    init: function() {
        this.on({
            create: this.onCreateOrRestore,
            restore: this.onCreateOrRestore,
            remove: this.onRemove,
            scope: this
        });

        this.eventsFiredOnGrid.forEach(this.removeEventDef, this);    
    },

    onCreateOrRestore: function() {
        var grid = this.parent();
        if (grid) {
            this.eventsFiredOnGrid.forEach(function(eventName) {
                grid.addEventDef(this.xeventDefs[eventName]);
            }, this);
        }
    },

    onRemove: function(grid) {
        if (grid) {
            this.eventsFiredOnGrid.forEach(grid.removeEventDef, grid);
        }
    }  
});
