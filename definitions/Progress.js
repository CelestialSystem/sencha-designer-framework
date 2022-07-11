xds.component.Registry.addDefinition({
    override: "Ext.Progress",
    typeAlias: 'progressbarwidget',
    mixin: ['baseview'],

    toolbox: {
        name: 'ProgressBar Widget',
        iconCls: 'icon-progressbar',
        category: 'Standard',
        groups: ['Forms','Views']
    }
});