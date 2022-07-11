xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Number",
    typeAlias: 'numbercolumn',

    toolbox: {
        name: 'Number Column',
        iconCls: 'icon-grid-num',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyNumberColumn',

    basicCfgs: ['format'],
    cfgs: [{
        name: 'format',
        merge: true,
        regex: /^[0,\.,\#]+$/,
        regexText: 'format property may only contain digits ([0-9]), commas (","), periods ("."), and pounds ("#")'
    }]
});
