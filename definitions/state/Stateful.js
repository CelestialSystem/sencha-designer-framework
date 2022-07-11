xds.component.Registry.addDefinition({
    override: "Ext.state.Stateful",
    typeAlias: 'state-stateful',

    // classLevel for reverse class grouping in property grid. Assigning it < 1 makes it shows after the base class level which is 1
    classLevel: 0.1,

    obscureCfgs: ['saveDelay']
});
