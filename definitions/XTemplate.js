xds.component.Registry.addDefinition({
    override: "Ext.XTemplate",
    typeAlias: 'template',
    mixin: ['abstracteditable', 'templatebehavior'],

    autoName: 'tpl',
    iconCls: 'icon-template',

    editorMode: 'text/html',

    validChildTypes: ['templatefunction', 'basicfunction', 'tplscss'],
    ignoreCfgs: [
        'functionsRefGroup'
    ],

    cfgs: [{
        name: 'definitions',
        merge: false,
        type: 'typedarray'
        // NOTE value(s) entered here are eval'd within the iframe context
    }, {
        name: 'designer|functions',
        displayName: 'Functions',
        type: 'refgroup',
        refSelector: '[type=templatefunction]',
        createTypes: ['templatefunction']
    }, {
        name: 'designer|displayName',
        displayName: 'displayName',
        type: 'string',
        group: xds.architectGroup,
        visibleOnlyAsChild: true,
        includeInCodeGen: false
    },{
        name: 'designer|scss',
        displayName: 'scss',
        type: 'refgroup',
        group: xds.architectGroup,
        includeInCodeGen: false,
        refSelector: '[type=tplscss]',
        createTypes: ['tplscss'],
        max: 1
    }]
});