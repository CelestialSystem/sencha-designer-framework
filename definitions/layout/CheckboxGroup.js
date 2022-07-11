xds.layouts.CheckboxGroup = {
    type: 'checkboxgroup',
    xcls: 'Ext.layout.container.CheckboxGroup',
    text: 'CheckboxGroup Layout',

    // Excluded from the layouts list by default; it will be manually added to the list for
    // the CheckboxGroup/RadioGroup definitions only.
    hidden: true,

    layoutCfgs: [{
        name: "autoFlex",
        type: "boolean",
        defaultValue: true
    }]
};
xds.component.Registry.addLayout(xds.layouts.CheckboxGroup);