xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Widget',
    typeAlias: 'widgetcell',
    autoName: 'MyWidgetCell',

    toolbox: {
        name: 'Widget Cell',
        iconCls: 'icon-grid-widget',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
