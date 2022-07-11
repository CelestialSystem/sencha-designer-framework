xds.component.Registry.addDefinition({
    override: "Ext.util.Floating",
    typeAlias: 'util-floating',

    // classLevel for reverse class grouping in property grid. Assigning it < 1 makes it shows after the base class level which is 1
    classLevel: 0.3,

    obscureCfgs: ['focusOnToFront', 'shadow'],

    cfgs: [{
        name: "shadow",
        merge: true,
        type: "auto",
        allowBoolean: true,
        editor: "options",
        options: [
            ['false', false],
            ['true', true],
            'drop',
            'frame',
            'sides'
        ]
    }]
});
