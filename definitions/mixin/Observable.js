xds.component.Registry.addDefinition({
    override: "Ext.mixin.Observable",
    typeAlias: "observable",
    mixin: ['observablebehavior'],

    obscureCfgs: ['bubbleEvents'],
    ignoreCfgs: ['listeners'],
    cfgs: [
        {
            // Note this is overridden in Component to add delegateeventbinding to
            // the refSelector and createTypes.
            name: 'eventsRefGroup',
            displayName: 'Event Bindings',
            type: 'refgroup',
            group: xds.architectGroup,
            refSelector: '[type=basiceventbinding]', //check specific type to disallow subdefs
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
                    childDefinition = xds.component.Registry.getDefinition('viewcontrollereventbinding'),
                    child = childDefinition ? childDefinition.$validationInstance : null;
                if (!child) {
                    return false;
                }

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
        }
    ]
});