xds.component.Registry.addDefinition({
    autoName: 'BasicEventBinding',

    type: 'basiceventbinding',
    inherits: 'abstracteventbinding',

    toolbox: {
        name: 'Basic Event Binding',
        iconCls: 'icon-basic-event-binding',
        category: 'Behaviors',
        groups: ['Behaviors','Views']
    },
    ignoreCfgs: ['scope'],

    cfgs: [{
        name: 'order',
        type: 'string',
        editor: 'options',
        defaultValue: 'current',
        options: ['before', 'current', 'after']
    }],

    init: function() {
        var me = this;
        me.ex('codeconfig', me.onCodeConfig, me);
        me.on('add', me.onAdd, me);
        me.on('validparent', me.onValidParent, me);
    },

    onCodeConfig: function(oldCodeConfig) {
        var me = this,
            propCount = 0,
            newCodeConfig, config, i, ln, isInView;

        if (me.isCfgSet('name')) {
            newCodeConfig = {};
            isInView = me.top().isType('viewbehavior');

            for (i = 0, ln = oldCodeConfig.configs.length; i < ln; i++) {
                config = oldCodeConfig.configs[i];
                // omit the 'name' config, it will be used as the property key
                // also omit 'scope' if we're in a view, as the view will have defaultListenerScope:true
                if (config.name !== 'name' && !(isInView && config.name === 'scope')) {
                    newCodeConfig[config.name] = config.value;
                    propCount++;
                }
            }

            if (isInView && ((propCount === 1 && newCodeConfig.fn) || (propCount === 2 && newCodeConfig.fn && newCodeConfig.hasOwnProperty('implHandler')))) {
                // If we ended up with no extra event options, simplify to the standalone string format
                oldCodeConfig.configs = [{
                    name: me.getCfgValue('name'),
                    type: 'string',
                    disableLineTracking: true, // we don't want line tracking to be confused
                    primitive: true,
                    value: newCodeConfig.fn,
                    rawValue: newCodeConfig.fn,
                    designerId: me.getUniqueId()
                }];
            } else {
                // Replace with a wrapper config that will trigger encoding by encodeEventBinding
                oldCodeConfig.configs = [{
                    name: me.getCfgValue('name'),
                    type: isInView ? 'declarativeEventBinding' : 'eventBinding',
                    disableLineTracking: true, // we don't want line tracking to be confused
                    primitive: false,
                    value: newCodeConfig,
                    rawValue: Ext4.encode(newCodeConfig),
                    designerId: me.getUniqueId()
                }];
            }

            return oldCodeConfig;
        } else {
            return false;
        }
    },

    onAdd: function(parent) {
        var itemId = 'itemId';
        if (!parent.isCfgSet(itemId) && !parent.isTop()) {
            parent.setCfgValue(itemId, parent.getName().toLowerCase());
        }
    },

    // Override the base impl in AbstractEventBinding to handle Touch-specific delegate bindings and itemId workaround
    getControlQueryForConvertToAction: function() {
        var me = this,
            target = me.getTargetInstance(),
            query;
        if (me.isType('delegateeventbinding')) {
            // if it's a delegate event binding we'll go ahead and use the delegate CQ
            query = me.getCfgValue('delegate');
        } else {
            if (target.isCfgSet('id')) {
                query = '#' + target.getCfgValue('id');
            } else if (target.isCfgSet('itemId')) {
                // in Touch using the itemId alone will not work, it has to be qualified
                // with something else so we prepend the component's xtype
                query = (target.getShortAlias() || '') + '#' + target.getCfgValue('itemId');
            }
        }
        return query;
    },

    onValidParent: function(parent) {
        // Basic event bindings are not allowed as descendants of viewmodels
        return parent
            ? !parent.top().isViewModelDefinition()
            : false;
    }
});
