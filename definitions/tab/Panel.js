xds.component.Registry.addDefinition({
    override: "Ext.tab.Panel",
    typeAlias: "tabpanel",

    "autoName": "MyTabPanel",
    "toolbox": {
        "name": "Tab Panel",
        "iconCls": "icon-tab-panel",
        "category": "Containers",
        "groups": ["Containers","Views"]
    },
    singleChildTypes: ['tabbar'],

    cardConfigGroup: '(Tab Panel Card)',

    cfgs: [
        {
            name: 'layout',
            merge: false,
            type: 'string',
            defaultValue: 'card',
            hidden: true,
            canSetValue: false
        },
        {
            name: "tabBar",
            merge: false,
            displayName: 'Tab Bar Config',
            type: "refgroup",
            refSelector: 'tabbar',
            createTypes: ['tabbar'],
            max: 1
        },
        {
            name: "tabBarPosition",
            merge: true,
            editor: 'combo',
            options: ["top", "bottom", "left", "right"]
        },
        {
            "name": "ui",
            "editor": "combo",
            "type": 'string',
            "options": ["light", "dark"]
        }
    ],

    inlineEdit: [{
        // xdsInlineEditCfgOwnerId is set in canvasconfig listener
        cfg: 'title',
        textEl: '.x-tab > .x-button-label'
    }],


    init: function() {
        var me = this;
        me.on({
            setup: me.onSetup,
            addchild: me.onAddOrRestoreChild,
            restorechild: me.onAddOrRestoreChild,
            removechild: me.onRemoveChild,
            codeconfig: me.onCodeConfig,
            scope: me
        });
    },

    onSetup: function() {
        var me = this;

        // Add some default cards
        if (me.children().length < 2) {
            me.createChild(['container', 'container', 'container']).each(function(instance, i) {
                instance.setCfgValue('title', 'Tab ' + (i + 1));
            });
        }

        me.setCfgValue('activeItem', 0);
    },

    onAddOrRestoreChild: function(child) {
        let me = this;

        if (child.isType('component')) {
            // Check to update the child's card status
            me.checkChildIsCard(child);

            // Add listener for when the child might change its card/non-card status later on
            child.on('cfgchange', me.onChildCfgChange, me, {childInstance: child});
        }
    },

    /**
     * Remove the configs that were added by the tab panel when the child was added.
     */
    onRemoveChild: function(child) {
        var me = this;
        child.un('cfgchange', me.onChildCfgChange, me);
        me.onChildIsNonCard(child);
    },

    onChildCfgChange: function(name, value, oldValue, changeEventOpts, eventOpts) {
        // Check to see if the config change could be turning a non-card into a card or vice versa
        if (name === 'docked' || name === 'centered' || name === 'floating') {
            this.checkChildIsCard(eventOpts.childInstance);
        }
    },

    checkChildIsCard: function(child) {
        if (this.getLayoutDefinition().isCardItem(child)) {
            this.onChildIsCard(child);
        } else {
            this.onChildIsNonCard(child);
        }
    },

    /**
     * When a child becomes a card, add special configs and start listening for
     * beforecfgchange events to perform validation
     */
    onChildIsCard: function(child) {
        if (!child.isTabPanelCard) {
            var me = this;
            me.addChildCardCfgs(child);
            child.on('linkedinstancebeforecfgremove', me.onBeforeCardCfgRemove, me);
            child.on('canvasconfig', me.onCardCanvasConfig, me, {cardId: child.getId()});
            child.isTabPanelCard = true;
        }
    },

    /**
     * When a child is no longer a card, remove the special configs and listener
     */
    onChildIsNonCard: function(child) {
        if (child.isTabPanelCard) {
            var me = this;
            me.removeChildCardCfgs(child);
            child.un('linkedinstancebeforecfgremove', me.onBeforeCardCfgRemove, me);
            child.un('canvasconfig', me.onCardCanvasConfig, me);
            delete child.isTabPanelCard;
        }
    },

    onCardCanvasConfig: function(config, eOpts) {
        // For each child card, add a 'tab' config that points back to the card's id so
        // the card is treated as the cfg owner when the tab is inline-edited. Note that
        // the 'tab' config of the card components is undocumented; we might need to
        // revisit its usage later if it goes away.
        // We also set the card id to be activated when the tab is clicked.
        var tab = config.tab || (config.tab = {});
        tab.xdsInlineEditCfgOwnerId = tab.xdsActivateInstanceId = eOpts.cardId;
        return config;
    },

    /**
     * Normalize the tabBar sub-config for the code generation
     */
    onCodeConfig: function(config) {
        if (config.refs) {
            config.refs = config.refs.filter(function(ref) {
                var refConfigs;
                if (ref.name === 'tabBar') {
                    // Remove the xtype config, it is implicit and unchangeable
                    refConfigs = ref.value.configs = ref.value.configs.filter(function(config) {
                        return config.name !== 'xtype';
                    });

                    // If we have no more non-default configs, remove the ref entirely
                    if (refConfigs.length === 0) {
                        return false;
                    }
                }

                return true;
            });
        }

        return config;
    },


    /**
     * Prevent a master instance from removing the card's title config.
     */
    onBeforeCardCfgRemove: function(card, configName) {
        if (configName === 'title' && card.flyCfg('title').getGroup() === this.cardConfigGroup) {
            return false;
        }
    },

    /**
     * Add the special card configs to a child card
     */
    addChildCardCfgs: function(child) {
        let me = this;

        if (me.getLayoutDefinition().isCardItem(child)) {
            // Child cards get a 'title' config
            if (!child.hasCfg('title')) {
                child.addCfg({
                    name: 'title',
                    type: 'string',
                    group: me.cardConfigGroup
                });
            }

            // Important to add iconCls cfg before checking it's value
            if (!child.hasCfg('iconCls')) {
                child.addCfg({
                    name: 'iconCls',
                    type: 'string',
                    group: this.cardConfigGroup,
                    "editor": "combo",
                    "options": xds.app.Resource.get('iconClassesAwesomeFive')
                });
            }

            // Child has config title but it's not defined - also don't add title if icon is set
            if (child.hasCfg('title') && !child.getCfgValue('title') && !child.getCfgValue('iconCls') ) {
                child.setCfgValue('title', 'New tab');
            }

            // Child cards get a 'badgeText' config
            if (!child.hasCfg('badgeText')) {
                child.addCfg({
                    name: 'badgeText',
                    type: 'string',
                    bindable: true,
                    group: me.cardConfigGroup
                });
            }

        }
    },

    /**
     * Remove the special card configs from a child
     */
    removeChildCardCfgs: function(child) {
        if (child.hasCfg('title') && child.flyCfg('title').getGroup() === this.cardConfigGroup) {
            child.removeCfg('title');
        }
        if (child.hasCfg('badgeText') && child.flyCfg('badgeText').getGroup() === this.cardConfigGroup) {
            child.removeCfg('badgeText');
        }

        this.removeIconClsCfg(child);
    },

    /**
     * Removes the iconCls config from the given child instance.
     */
    removeIconClsCfg: function(child) {
        if (!child.isType('tabbar') && child.hasCfg('iconCls') && child.flyCfg('iconCls').getGroup() === this.cardConfigGroup) {
            child.removeCfg('iconCls');
        }
    }
});
