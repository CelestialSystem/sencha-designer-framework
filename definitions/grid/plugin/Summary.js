xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Summary",

    typeAlias: "gridsummaryrow",
    ptype: "gridsummaryrow",

    validParentTypes: [
        'grid'
    ],

    "mixin": [
        "Ext.mixin.Bindable"
    ],

    toolbox: {
        name: 'Summary Row Plugin',
        iconCls: 'icon-summary-feature', // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids"]
    },

    "cfgs": [
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-grid-summaryrow"
        },
        {
            "name": "docked",
            "type": "string",
            "defaultValue": "top"
        },
        {
            "name": "height",
            "type": "auto",
            "defaultValue": 32
        }
    ]
});