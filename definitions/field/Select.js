xds.component.Registry.addDefinition({
    override: "Ext.field.Select",
    typeAlias: "selectfield",

    "autoName": "MySelectField",
    "toolbox": {
        "name": "Select Field",
        "iconCls": "icon-selectfield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    ignoreCfgs: ["tabIndex"],

    cfgs: [
        {
            // TODO this is marked with @hide in sdk; should it?
            "name": "component",
            "type": "object",
            "defaultValue": {
                useMask: true
            }
        },
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
