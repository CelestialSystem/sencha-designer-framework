xds.component.Registry.addDefinition({
    override: "Ext.button.Segmented",
    typeAlias: 'segmentedbutton',

    toolbox: {
        name: 'Segmented Button',
        iconCls: 'icon-segmentedbutton',
        category: 'Standard',
        groups: ['Buttons']
    },
    autoName: 'MySegmentedButton',

    cfgs: [{
        name: 'buttons',
        displayName: 'Buttons',
        type: 'refgroup',
        refSelector: 'button',
        createTypes: ['button']
    },{
        name: 'layout',
        merge: true,
        editor: 'options',
        options: ["segmentedbutton"].concat(xds.component.Registry.getAllVisibleLayouts()),
        defaultValue: "segmentedbutton",
        bindable: true,
        alternates: [
            {
                "type": "object"
            }
        ]
    }]

});