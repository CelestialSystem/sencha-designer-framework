xds.layouts.Card = {
    type:'card',
    xcls:'Ext.layout.container.Card',
    text: 'Card Layout',

    cfgs: [],

    layoutCfgs : [{
        name: 'deferredRender',
        type: 'boolean'
    }],

    onInit: function(containerInstance, isRestoring) {
        var me = this,
            instances = me.managedInstances,
            sub;

        // Add to list of instances managed by card layout
        if (!instances) {
            instances = me.managedInstances = [];
        }
        Ext4.Array.include(instances, containerInstance);

        if (!containerInstance.hasCfg('activeItem') && !containerInstance.isType('tabpanel')) {
            containerInstance.addCfg({
                name: 'activeItem',
                type: 'auto', // supports number/string
                defaultValue: 0
            });
        }

        containerInstance.on({
            beforeaddchild: me.onBeforeAddChild,
            beforeremovechild: me.onBeforeRemoveChild,
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            canvasconfig: me.onCanvasConfig,
            containerInstance: containerInstance, //passed to handler in eventOpts arg
            scope: me
        });

        // Start listening for activation of all instances in the project
        if (!me.sub) {
            sub = me.sub = Ext4.create('sencha.messaging.EventSubscriber');
            sub.subscribe('instance:activate', me.onAnyInstanceActivate, me);
            sub.subscribe('framework:unload', me.onFrameworkUnload, me);
        }
    },

    onDestroy: function(containerInstance) {
        var me = this,
            instances = me.managedInstances;

        if (instances) {
            Ext4.Array.remove(instances, containerInstance);
        }

        if (containerInstance.hasCfg('activeItem')) {
            containerInstance.removeCfg('activeItem');
        }

        containerInstance.un({
            beforeaddchild: me.onBeforeAddChild,
            beforeremovechild: me.onBeforeRemoveChild,
            addchild: me.onAddChild,
            removechild: me.onRemoveChild,
            canvasconfig: me.onCanvasConfig,
            scope: me
        });
    },

    onFrameworkUnload: function() {
        var me = this,
            sub = me.sub;
        if (sub) {
            sub.unsubscribeAll();
            delete me.sub;
        }
        delete me.managedInstances;
    },

    onBeforeAddChild: function(childInstance, beforeInstance, eventOpts) {
        this.storeContainerActiveItem(eventOpts.containerInstance);
    },

    onBeforeRemoveChild: function(childInstance, eventOpts) {
        this.storeContainerActiveItem(eventOpts.containerInstance);
    },

    onAddChild: function(childInstance, beforeInstance, eventOpts) {
        this.updateContainerActiveItem(eventOpts.containerInstance);
    },

    onRemoveChild: function(childInstance, eventOpts) {
        this.updateContainerActiveItem(eventOpts.containerInstance);
    },

    getActiveItemConfigName: function(container) {
        return container.isType('tabpanel') ? 'activeTab' : 'activeItem';
    },

    /**
     * For a given container, before one of its children is added/removed, store a
     * reference to the child card instance corresponding to the current activeItem config
     * value, so that updateContainerActiveItem can sync the activeItem after the add/remove.
     */
    storeContainerActiveItem: function(container) {
        var activeItem = container.getCfgValueOrDefault(this.getActiveItemConfigName(container)) || 0;
        container.lastActiveItemInstance = container.children().filter(this.isCardItem)[activeItem];
    },

    /**
     * For a given container, after one of its children is added/removed, update its
     * activeItem config to match the index of the previous activeItem instance stored by
     * storeContainerActiveItem.
     */
    updateContainerActiveItem: function(container) {
        var oldActiveItemInstance = container.lastActiveItemInstance,
            activeItem = container.children().filter(this.isCardItem).indexOf(oldActiveItemInstance);
        if (activeItem === -1) {
            activeItem = undefined; //activeItem instance was removed, so reset to default
        }
        container.setCfgValue(this.getActiveItemConfigName(container), activeItem);
    },


    /**
     * When drawing to the canvas, set the initial activeItem to make the current selected
     * instance visible, if applicable.
     */
    onCanvasConfig: function(config, eventOpts) {
        var container = eventOpts.containerInstance,
            activeCard = this.getCardForInstance(xds.component.Selection.getInstance(), container),
            activeItemConfigName = container.isType('tabpanel') ? 'activeTab' : 'activeItem';
        if (activeCard) {
            config[activeItemConfigName] = container.children().filter(this.isCardItem).indexOf(activeCard);
        }
        return config;
    },



    /**
     * Handle the activation of any instance in the project. If the activated intance is within
     * one of the card-layout container's cards, switch the canvas instance to display that card.
     * @param {Object} activatedInstance The instance that was activated
     */
    onAnyInstanceActivate: function(activatedInstance) {
        var me = this,
            instances = me.managedInstances;

        // Need to delay slightly for instances where the activation is happening before the
        // canvas has been fully rendered.
        setTimeout(function() {
            var card, i, instance, activeItem;

            // Just in case it became unselected during the delay
            if (instances && xds.component.Selection.getInstance() === activatedInstance) {
                for (i = instances.length; i--;) {
                    instance = instances[i];
                    card = me.getCardForInstance(activatedInstance, instance);

                    if (card) {
                        activeItem = Math.max(0, me.indexOfCardItem(instance, card));
                    } else {
                        // Not inside a card, revert to the configured activeItem
                        activeItem = instance.getCfgValueOrDefault(me.getActiveItemConfigName(instance));
                        if (Ext4.isNumber(activeItem)) {
                            activeItem = Math.min(activeItem, instance.children().filter(me.isCardItem).length - 1);
                        }
                    }
                    me.setCanvasInstanceActiveItem(instance, activeItem);
                }
            }
        }, 100);
    },


    /**
     * For a given instance, return the card component that the instance is a member of,
     * or null if the instance is not within a card.
     * @param instance
     */
    getCardForInstance: function(instance, containerInstance) {
        var parent;
        while (instance) {
            parent = instance.parent();
            if (parent === containerInstance) {
                return this.isCardItem(instance) ? instance : null;
            }
            instance = parent;
        }
        return null;
    },


    /**
     * Determine whether the given instance is capable of being a card within a card layout.
     * Lines up with Ext.Component#isInnerItem in Touch SDK
     */
    isCardItem: function(instance) {
        return instance.is('component') &&
            !instance.getCfgValueOrDefault('dock') &&
            !instance.getCfgValueOrDefault('floating');
    },


    indexOfCardItem: function(container, item) {
        return container.children().filter(this.isCardItem).indexOf(item);
    },


    /**
     * Set the activeItem on the tabpanel's canvas instance. Does not update the activeItem
     * config, only brings the given item into view visually on the canvas.
     * @param {xds.component.Definition} container The container instance
     * @param {Number/String} item The index or component id of the item to set as active
     * @return {Promise}
     */
    setCanvasInstanceActiveItem: function(container, item) {
        return xds.canvas.messaging.call('setActiveItem', container.getId(), item);
    }

};
xds.component.Registry.addLayout(xds.layouts.Card);