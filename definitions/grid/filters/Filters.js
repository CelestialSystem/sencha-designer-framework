xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.Filters",
    ptype: 'gridfilters',

    autoName: 'MyGridFiltersPlugin',

    validParentTypes: ['tablepanel'],

    toolbox: {
        name: 'Grid Filters Plugin',
        iconCls: 'icon-filter',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },

    init: function() {
        this.on('beforeremove', this.onBeforeRemove);
    },

    onBeforeRemove: function() {
        // if there are any filters on this grid panel, do not allow removal
        if (this.parent().query('basecolumnfilter').length > 0) {
            return false;
        }
    }
});
