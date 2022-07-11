xds.component.Registry.addDefinition({
    override: "Ext.form.Labelable",
    typeAlias: 'labelable',

    // classLevel for reverse class grouping in property grid. Assigning it < 1 makes it shows after the base class level which is 1
    classLevel: 0.2,

    obscureCfgs: ['baseBodyCls', 'clearCls', 'errorMsgCls', 'fieldBodyCls', 'formItemCls', 'invalidCls', 'labelCls', 'labelClsExtra'],
    cfgs: [{
        name: 'labelAlign',
        merge: true,
        editor: 'options',
        options: ['left', 'top', 'right']
    }, {
        name: 'msgTarget',
        merge: true,
        editor: 'options',
        options: [
            'qtip',
            'title',
            'under',
            'side',
            'none'
            // TODO element id?
        ]
    }]
});