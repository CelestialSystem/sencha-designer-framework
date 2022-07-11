xds.layouts.Accordion = {
    type:'accordion',
    xcls:'Ext.layout.container.Accordion',
    text: 'Accordion Layout',

    cfgs: [],

    layoutCfgs : [{
        name: 'fill',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue',
        defaultValue: true
    },{
        name: 'autoWidth',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue',
        defaultValue: true
    },{
        name: 'titleCollapse',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue',
        defaultValue: true
    },{
        name: 'hideCollapseTool',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue'
    },{
        name: 'collapseFirst',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue'
    },{
        name: 'animate',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue'
    },{
        name: 'sequence',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue'
    },{
        name: 'activeOnTop',
        type: 'boolean',
        setFn: 'setContainerConfig',
        getFn: 'getContainerConfigValue'
    },{
        name: 'multi',
        type: 'boolean',
        defaultValue: false
    }],

    onBeforeInit: function(containerInstance) {
        var nonPanels = containerInstance.query('> :not(panel)'),
            unDockedNonPanels = Ext4.Array.filter(nonPanels, function(item) {
                return !item.isCfgSet('dock');
            });

        // if the container has at least 1 child that isn't a panel and is not docked, prevent the layout from being set
        if (unDockedNonPanels && unDockedNonPanels.length) {
            xds.ui.Ack.display(xds.app.Resource.get('validation').abstractContainer.cantDoAccordion);
            return false;
        }
        return true;
    },

    onInit: function(containerInstance, isRestoring) {
        var me = this,
            instances = me.managedInstances,
            sub;

        // Add to list of instances managed by accordion layout
        if (!instances) {
            instances = me.managedInstances = [];
        }
        Ext4.Array.include(instances, containerInstance);

        containerInstance.on({
            canvasconfig: me.onCanvasConfig,
            validchild: me.onValidChild,
            addchild: me.onChildAdd,
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

        containerInstance.un({
            canvasconfig: me.onCanvasConfig,
            validchild: me.onValidChild,
            scope: me
        });
    },

    onValidChild: function(child, eventOpts) {
        var me = eventOpts.containerInstance;
        // if it's a view instance it must inherit from panel or be docked
        // only children of a panel have the dock config
        return (!child.isType('baseview') || (child.isType('panel') || (me && me.isType('panel') && child.isType('component'))));
    },

    onChildAdd: function(child, before, eventOpts) {
        var me = eventOpts.containerInstance;
        // if accordion container is a panel and the child being added is a component but not a panel let's set the dock to top
        if (me && me.isType('panel') && child.isType('component') && !child.isType('panel')) {
            if (!child.hasCfg('dock')) {
                child.addCfg({
                    type: 'string',
                    name: 'dock',
                    group: 'Ext.layout.component.Dock',
                    editor: 'options',
                    options: [
                        'bottom',
                        'left',
                        'right',
                        'top'
                    ]
                });
            }
            child.setCfgValue('dock', 'top');
        }
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


    /**
     * When drawing to the canvas, set the collapsed state of the child panels so that it
     * expands the one containing the current selection.
     */
    onCanvasConfig: function(config, eventOpts) {
        var container = eventOpts.containerInstance,
            activePanel = this.getAccordionItemForInstance(xds.component.Selection.getInstance(), container);
        if (activePanel && config.items) {
            config.items.forEach(function(child) {
                if (!child.floating) {
                    child.collapsed = (child.xdsInstanceId !== activePanel.getId());
                }
            });
        }
        return config;
    },


    /**
     * Handle the activation of any instance in the project. If the activated intance is within
     * one of the accordion-layout container's items, switch the canvas instance to display that item.
     * @param {Object} activatedInstance The instance that was activated
     */
    onAnyInstanceActivate: function(activatedInstance) {
        var me = this,
            containers = me.managedInstances;

        // Need to delay slightly for instances where the activation is happening before the
        // canvas has been fully rendered.
        setTimeout(function() {
            if (me.expanding) {
                me.onAnyInstanceActivate(activatedInstance);
                return;
            }

            var i, container, panels, selectedPanel, cmp, multi, hasExpanded;
            var setExpanding = function(me, panel) {
                setTimeout(function(){
                    me.expanding = undefined;
                }, 1000);
                me.expanding = true;
                xds.canvas.messaging.call('expandPanel', panel.getId());
            };

            // Just in case it became unselected during the delay
            if (containers && xds.component.Selection.getInstance() === activatedInstance) {
                for (i = containers.length; i--;) {
                    container = containers[i];
                    selectedPanel = me.getAccordionItemForInstance(activatedInstance, container);
                    if (selectedPanel) {
                        // Expand the selected child panel
                        setExpanding(me, selectedPanel);
                    } else {
                        // Reset state of panels to initial configuration
                        multi = container.getCfgValue('container|multi');
                        panels = container.children().filter(me.isAccordionItem);
                        panels.reverse().forEach(function(panel, i) {
                            if (panel.getCfgValueOrDefault('collapsed') === false || (!hasExpanded && i === panels.length - 1)) {
                                setExpanding(me, panel);
                                hasExpanded = true;
                            } else if (multi) {
                                xds.canvas.messaging.call('collapsePanel', panel.getId());
                            }
                        });
                    }
                }
            }
        }, 100);
    },


    /**
     * For a given instance, return the accordion child panel that the instance is a member of,
     * or null if the instance is not within one.
     * @param instance
     */
    getAccordionItemForInstance: function(instance, containerInstance) {
        var parent;
        while (instance) {
            parent = instance.parent();
            if (parent === containerInstance) {
                return this.isAccordionItem(instance) ? instance : null;
            }
            instance = parent;
        }
        return null;
    },


    /**
     * Determine whether the given instance is capable of being an inner item within the accordion layout.
     */
    isAccordionItem: function(instance) {
        return instance.isType('panel') &&
            !instance.getCfgValueOrDefault('dock') &&
            !instance.getCfgValueOrDefault('floating');
    }

};
xds.component.Registry.addLayout(xds.layouts.Accordion);