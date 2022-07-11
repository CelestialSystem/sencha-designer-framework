xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.RowWidget",
    typeAlias: 'gridrowwidgetplugin',
    ptype: 'rowwidget',

    toolbox: {
        name: 'Row Widget',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ['Grids']
    },

    init: function() {
        var me = this;
        me.on('create', me.onCreate, me);
    },

    onCreate: function() {
        this.setCfgValue('widget', { xtype: 'component' });
    }
});
