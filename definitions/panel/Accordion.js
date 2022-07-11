xds.component.Registry.addDefinition({
    override: "Ext.panel.Accordion",
    typeAlias: "accordion",

    toolbox: {
        name: "Accordion panel",
        iconCls: "icon-accordion",
        category: "Containers",
        groups: ["Containers", "Views"]
    },

    cfgs: [
        {
            name: 'layout',
            merge: false,
            type: 'string',
            defaultValue: 'auto',
            editor: 'options',
            options: xds.component.Registry.getAllVisibleLayouts().filter(function(layout) {
                return ['center','card','fit','float','form'].indexOf(layout) === -1;
            })
        }
    ],
});
