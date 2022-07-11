xds.component.Registry.addDefinition({
    override: "Ext.mixin.Observable",
    typeAlias: 'observable',
    mixin: ['observablebehavior'],

    // classLevel for reverse class grouping in property grid. Assigning it < 1 makes it shows after the base class level which is 1
    classLevel: 0.5,

    ignoreCfgs: [
        'listeners'
    ],

    cfgs: [
        {
            name: 'eventsRefGroup',
            displayName: 'Basic Event Bindings',
            type: 'refgroup',
            group: xds.architectGroup,
            refSelector: '[type=basiceventbinding]',
            createTypes: ['basiceventbinding'],
            includeInLinkedInstance: true,
            isHidden: function() {
                // Hide the refgroup if basic event bindings are not allowed on this instance
                var parent = this.owner,
                    child = xds.component.Registry.getDefinition('basiceventbinding').$validationInstance;
                return !child.$isValidParent(parent) || !parent.$isValidChild(child);
            }
        },
        {
            name: 'viewControllerEventsRefGroup',
            displayName: 'View Controller Event Bindings',
            type: 'refgroup',
            group: xds.architectGroup,
            refSelector: '[type=viewcontrollereventbinding]',
            createTypes: ['viewcontrollereventbinding'],
            includeInLinkedInstance: true,
            isHidden: function() {
                // Hide the refgroup if vc event bindings are not allowed on this instance
                var parent = this.owner,
                    child = xds.component.Registry.getDefinition('viewcontrollereventbinding').$validationInstance;
                return !child.$isValidParent(parent) || !parent.$isValidChild(child);
            }
        },
        {
            name: 'customEventsRefGroup',
            displayName: 'Custom Events',
            type: 'refgroup',
            group: xds.architectGroup,
            refSelector: 'customevent',
            createTypes: ['customevent'],
            visibleOnlyAsTop: true
        },{
            // TODO: this is to compensate for a missing doc cfg.
            // may be able to remove in a future release.
            name: 'bubbleEvents',
            type: 'string',
            alternates: [{
                type: 'array'
            }]
        }
    ]
});
