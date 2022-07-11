xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Base',
    typeAlias: 'basecell',

    init: function() {
        this.setReference({ name: 'cell', type: 'object'});
    }
});
