xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.Grouping",
    typeAlias: 'groupinggridfeature',

    toolbox: {
        name: 'Grouping Feature',
        iconCls: 'icon-grouping-feature',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MyGroupingFeature',

    eventsFiredOnGrid: ['groupclick', 'groupcollapse', 'groupcontextmenu', 'groupdblclick', 'groupexpand'],

    basicCfgs: ['hideGroupedHeader', 'startCollapsed'],
    cfgs: [{
        name: 'groupHeaderTpl',
        merge: true,
        type: 'template'
    }],

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
