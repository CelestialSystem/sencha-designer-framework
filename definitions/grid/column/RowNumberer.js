xds.component.Registry.addDefinition({
    override: "Ext.grid.column.RowNumberer",
    typeAlias: 'rownumberer',

    disablePromoteToClass: true,

    toolbox: {
        name: 'RowNumberer Column',
        iconCls: 'icon-grid-rownumberer',
        category: 'Grid Columns',
        groups: ['Grids']
    },

    ignoreCfgs: ['editor', 'groupable', 'renderer', 'hideable'],

    init: function() {
        var me = this;
        me.on('validparent', me.onValidParent, me);
    },

    onValidParent: function(parent) {
        return parent && !parent.is('treepanel') && !parent.up('treepanel');
    }
});
