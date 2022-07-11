xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Template",
    typeAlias: 'templatecolumn',

    canvasAlias: 'xdtemplatecolumn',
    toolbox: {
        name: 'Template Column',
        iconCls: 'icon-grid-tpl',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyTemplateColumn',

    basicCfgs: ['tpl'],
    cfgs: [{
        name: 'tpl',
        merge: false,
        type: 'template'
    }]
});

