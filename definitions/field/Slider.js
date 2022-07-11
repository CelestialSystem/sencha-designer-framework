xds.component.Registry.addDefinition({
    override: "Ext.field.Slider",
    typeAlias: "sliderfield",

    "autoName": "MySliderField",
    "toolbox": {
        "name": "Slider Field",
        "iconCls": "icon-slider",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    },

    ignoreCfgs: [
        'tabIndex',
        'values' //Just an alias to value
    ],
    cfgs: [
        {
            name: "value",
            merge: true,
            type: "typedarray",
            memberConfig: {
                type: 'number'
            }
        }
    ]
});
