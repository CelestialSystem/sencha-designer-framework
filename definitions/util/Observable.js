xds.component.Registry.addDefinition({
    override: "Ext.util.Observable",

    // In Ext5 we have both Ext.mixin.Observable and Ext.util.Observable, which are different
    // in terms of internal implementation but in terms of Architect we want to treat them the
    // same. The simplest way to do that is simply to mixin one into the other. This also allows
    // checks like isType('observable'), which we do in a lot of places, to work for both.
    mixin: ['Ext.mixin.Observable'],

    ignoreCfgs: [
        'listeners'
    ]
});
