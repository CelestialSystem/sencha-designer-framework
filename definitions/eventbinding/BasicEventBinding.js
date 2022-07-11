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

    init: function() {
        var me = this;
        me.ex('codeconfig', me.onCodeConfig, me);
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

    onValidParent: function(parent) {
        // Basic event bindings are not allowed as descendants of viewmodels
        if (parent) {
            var top = parent.top();
            return !top.isViewModelDefinition();
        } else {
            return false;
        }
    }
});