xds.component.Registry.addDefinition({
    override: "Ext.route.Route",
    typeAlias: 'controllerroute',
    mixin: ['commoncontrollerroute'],

    autoName: 'Route',
    toolbox: {
        name: 'Controller Route',
        iconCls: 'icon-controller-route',
        category: 'Behaviors',
        groups: ['Behaviors']
    },

    ignoreCfgs: [
        // We get the 'action' cfg from the generated definition commoncontrollerroute, but we want to instead
        // use the 'fn' config from the mixin which has 'action' as its displayName
        'action',
        // The controller ref is set by the framework during instantiation
        'controller'
    ],

    init: function() {
        var me = this;

        me.on({
            addchild: me.onAddOrRestoreChild,
            restorechild: me.onAddOrRestoreChild,
            removechild: me.onRemoveChild,
            cfgchange: me.onCfgChange
        });
    },

    onAddOrRestoreChild: function(child) {
        const me = this,
            childName = child.getName(),
            isCorrectChild = ['before', 'exit'].includes(childName);

        if (isCorrectChild) {
            // override getTypedParams function for 'before' function for better autocomplete
            child.getTypedParams = function() {
                var routeParams = me.parseParams(me.getCfgValue('url')),
                    beforeParams;

                beforeParams = routeParams.map(function(param) {
                    return {
                        name: param,
                        type: 'String'
                    };
                });
                beforeParams.push({
                    name: 'action',
                    type: 'Object'
                });
                return beforeParams;
            };
            // save a reference to the before function for easy access on cfgchange
            me.beforeFunction = child;
            me.updateBeforeParams();
        }
    },

    onRemoveChild: function(child) {
        const isFixedFunction = child.isType('fixedfunction'),
            fnValue = child.getCfgValue('fn'),
            isCorrectChild = ['before', 'exit'].includes(fnValue);

        if (isFixedFunction && isCorrectChild) {
            delete this.beforeFunction;
        }
    },

    onCfgChange: function(name, value, oldValue) {
        // if the url changes, update the params for the 'before' function, if it exists
        if ((name === 'url') && (this.beforeFunction)) {
            this.updateBeforeParams();
        }
    },

    /**
     * update the parameters of the 'before' function based on URL route params
     */
    updateBeforeParams: function() {
        var me = this,
            params = me.parseParams(me.getCfgValue('url'));
        
        params.push('action');
        me.beforeFunction.setCfgValue('designer|params', params);
    }
});
