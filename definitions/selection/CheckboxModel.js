xds.component.Registry.addDefinition({
    override: "Ext.selection.CheckboxModel",
    typeAlias: 'checkboxselectionmodel',

    toolbox: {
        name: 'Checkbox Selection Model',
        iconCls: 'icon-checkbox-selmodel',
        category: 'Grid Selection',
        groups: ['Grids']
    },
    autoName: 'MyCheckboxSelectionModel',

    cfgs: [{
        name: 'injectCheckbox',
        merge: true,
        editor: 'combo',
        options: ['first', 'last']
    }]
});
