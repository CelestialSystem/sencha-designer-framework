xds.component.Registry.addDefinition({
    autoName: 'DelegateEventBinding',
    docClassName: 'DelegateEventBinding',

    type: 'delegateeventbinding',
    inherits: 'targetedeventbinding',

    validParentTypes: ['baseview', 'linkedinstance'],

    toolbox: {
        name: 'Delegate Event Binding',
        iconCls: 'icon-delegate-event-bind',
        category: 'Behaviors',
        groups: ['Behaviors','Views']
    },

    cfgs: [{
        name: 'delegate',
        type: 'string',
        required: true
    }]
});