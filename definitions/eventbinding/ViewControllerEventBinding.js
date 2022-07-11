xds.component.Registry.addDefinition({
    autoName: 'EventBinding',

    type: 'viewcontrollereventbinding',
    inherits: 'abstracteventbinding',

    toolbox: {
        name: 'View Controller Event Binding',
        iconCls: 'icon-vc-event-binding',
        category: 'Behaviors',
        groups: ['Behaviors','Views']
    },

    // While the instance lives in the view component's subtree, its handler
    // function goes on the view controller.
    thisType: 'Ext.app.ViewController',

    init: function() {
        var me = this;
        me.ex('codeconfig', me.onCodeConfig, me);
        me.on('validparent', me.onValidParent, me);
    },

    onCodeConfig: function(oldCodeConfig) {
        var me = this,
            propCount = 0,
            newCodeConfig, config, i, ln, top;

        if (me.isCfgSet('name')) {
            newCodeConfig = {};

            for (i = 0, ln = oldCodeConfig.configs.length; i < ln; i++) {
                config = oldCodeConfig.configs[i];
                // omit 'scope', unless there are also basic event bindings in the tree in which
                // case defaultListenerScope:true will be set and we need to specify scope:'controller'
                if (config.name === 'scope') {
                    top = me.top();
                    if (top.isType('viewbehavior') && top.needsDefaultListenerScope()) {
                        newCodeConfig.scope = 'controller';
                        propCount++;
                    }
                }
                // omit the 'name' config, it will be used as the property key
                else if (config.name !== 'name') {
                    newCodeConfig[config.name] = config.value;
                    propCount++;
                }
            }

            if ((propCount === 1 && newCodeConfig.fn) || (propCount === 2 && newCodeConfig.fn && newCodeConfig.hasOwnProperty('implHandler'))) {
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
                    type: 'declarativeEventBinding',
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
        // VC event bindings are only allowed as descendants of views or viewmodels
        if (parent) {
            var top = parent.top();
            return top.isViewDefinition() || top.isViewModelDefinition();
        } else {
            return false;
        }
    }
});
