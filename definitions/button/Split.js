xds.component.Registry.addDefinition({
    override: "Ext.button.Split",
    typeAlias: 'splitbutton',

    toolbox: {
        name: 'Split Button',
        iconCls: 'icon-splitbutton',
        category: 'Standard',
        groups: ['Buttons']
    },
    autoName: 'MySplitButton',

    ignoreCfgs: [
        'arrowTooltip' // disabled due to SDK bug https://sencha.jira.com/browse/EXTJSIV-8273
    ]
});