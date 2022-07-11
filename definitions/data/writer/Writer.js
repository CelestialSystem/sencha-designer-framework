xds.component.Registry.addDefinition({
    override: "Ext.data.writer.Writer",
    typeAlias: 'writer',
    mixin: ['basedata', 'writerbehavior'],

    validParentTypes: ['proxy'],
    validChildTypes: ['!basiceventbinding'],
    transformGroup: 'writers',
    disableDuplication: true
});