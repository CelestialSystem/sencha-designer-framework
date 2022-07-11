xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.AdvancedGrouping",
    typeAlias: 'advancedgroupingfeatureplugin',
    ftype: 'advancedgroupingfeature',

    toolbox: {
        name: 'Advanced Grouping Feature',
        iconCls: 'icon-grouping-feature',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MyAdvancedGrouping',

    eventsFiredOnGrid: ['aftergroupschange', 'beforegroupschange', 'groupclick', 'groupcollapse', 'groupcontextmenu', 'groupexpand', 'groupsummaryclick', 'groupsummarycontextmenu', 'summaryclick', 'summarycontextmenu'],

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
