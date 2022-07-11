xds.component.Registry.addDefinition({
    override: "Ext.field.ComboBox",
    typeAlias: "comboboxfield",

    toolbox: {
        "name": "ComboBox",
        "iconCls": "icon-combobox",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    ignoreCfgs: ["tabIndex"],

    cfgs: [
        {
            name: "store",
            merge: false,
            type: "store",
            bindable: true,
            alternates: [{
                type: "string"
            }, {
                type: "object"
            }]
        },
        {
            name: 'valueField',
            merge: true,
            type: 'datafield',
            alternates: [{
                type: 'auto'
            }]
        },
        {
            name: 'displayField',
            merge: true,
            type: 'datafield'
        }
    ]

});
