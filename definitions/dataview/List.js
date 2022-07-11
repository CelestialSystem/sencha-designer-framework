xds.component.Registry.addDefinition({
    override: "Ext.dataview.List",
    typeAlias: "list",

    "canvasAlias": "widget.xdlist", //dtype defined in web/src/frameworks/touch24/dtypes/dataview/List.js

    "toolbox": {
        "name": "List",
        "iconCls": "icon-list",
        "category": "Views",
        "groups": ["Views"]
    },

    singleChildTypes: ['listpaging', 'pullrefresh', 'sortablelist', 'listswiper', 'listindexbar'],

    cfgs: [
        {
            name: 'indexBar',
            merge: false,
            displayName: 'Index Bar',
            type: 'refgroup',
            refSelector: 'listindexbar',
            createTypes: ['listindexbar'],
            max: 1
        },
        {
            name: "onItemDisclosure",
            merge: true,
            alternates: [{
                type: 'function',
                applyToConfig: true
            }]
        },
        {
            name: 'plugins',
            displayName: 'Plugins',
            type: 'refgroup',
            refSelector: 'abstractplugin',
            createTypes: ['listpaging', 'pullrefresh', 'sortablelist', 'listswiper']
        },
        {
            name: "ui",
            editor: "combo",
            type: 'string',
            options: [
                'normal',
                'round'
            ]
        }
    ],

    init: function() {
        var me = this;
        me.ex('codeconfig', me.onCodeConfig, me);
        me.ex('addchild', me.onAddChild, me);
        me.on('activate', me.onActivate, me);
        me.ex('removechild', me.onRemoveChild, me);
        me.on('beforecfgchange', me.onBeforeCfgChange, me);
        me.on('cfgchange', me.onCfgChange, me);

        me.infiniteListMsg = xds.Resource.get('validation').sortableListPlugin.infiniteList;
        me.infiniteListAutoMsg = xds.Resource.get('validation').sortableListPlugin.infiniteListAuto;
        me.handleElementMsg = xds.Resource.get('validation').sortableListPlugin.handleElement;
    },

    getDefaultItemTpl: function() {
        return '<div>List Item {string}</div>';
    },

    onAddChild: function(child) {
        var me = this;

        // The indexBar requires grouping
        if (child.isType('listindexbar')) {
            me.setCfgValue('grouped', true);
        } else if (child.isType('sortablelist')) {
            if (me.getCfgValue('infinite') !== true) {
                me.setCfgValue('infinite', true);
                xds.ui.Ack.display(me.infiniteListAutoMsg.text);
            }
            // check for handle element, add/remove message accordingly?
            me.checkForHandleElement();
        } else if (child.isType('Ext.Component') && child.hasCfg('docked') && !child.getCfgValueOrDefault('docked')) {
            child.setCfgValue('docked', 'top');
        } else if (child.isType('Ext.XTemplate')) {
            // when the itemTpl changes, check it for a handle, if applicable
            child.on('cfgchange', this.checkForHandleElement, me);
        }
    },

    onCodeConfig: function(config) {
        // Normalize the indexBar ref
        if (config.refs) {
            config.refs = config.refs.filter(function(ref) {
                if (ref.name === 'indexBar') {
                    // Remove the xtype config, it is implicit and unchangeable
                    var refConfigs = ref.value.configs = ref.value.configs.filter(function(config) {
                        return config.name !== 'xtype';
                    });

                    // If we have no more non-default configs, remove the ref entirely and add a
                    // simple true boolean config in its place
                    if (refConfigs.length === 0) {
                        config.configs.push({
                            name: 'indexBar',
                            type: 'boolean',
                            primitive: true,
                            rawValue: true
                        });
                        return false;
                    }
                }

                return true;
            });
        }

        return config;
    },

    onBeforeCfgChange: function(name, value, oldValue) {
        var me = this,
            associatedStore,
            message;

        // if "grouped" is set to true, ensure that the associated store has a
        // grouper function, a group by field, or is grouped remotely
        if ((name === 'grouped') && (value === true)) {
            if (me.isCfgSet('store')) {
                associatedStore = me.flyCfg('store').getValueInstance();
                if (associatedStore
                    && !associatedStore.child('grouper')
                    && !associatedStore.getCfgValue('groupField')
                    && !associatedStore.getCfgValue('remoteGroup')) {
                    message = xds.Resource.get('storeGrouping').needGrouper;
                    xds.ui.Ack.display(Ext4.String.format(message, associatedStore.getDisplayName()));
                    return false;
                }
            }
        }
        return true;
    },

    onCfgChange: function(name, value, oldValue) {
        var me = this;

        // if the user sets the infinite config to false, but this list contains a 
        // sortable list plugin
        if ((name === 'infinite')) {
            if (!value && me.child('sortablelist')) {
                me.addMessage(me.infiniteListMsg);
            } else {
                me.removeMessage(me.infiniteListMsg);
            }
        }
    },

    onActivate: function() {
        this.checkForHandleElement();
    },

    onRemoveChild: function() {
        var me = this;

        if (! me.child('sortablelist')) {
            me.removeMessage(me.handleElementMsg);
            me.removeMessage(me.infiniteListMsg);
        }
    },

    checkForHandleElement: function() {
        var me = this,
            sortableList = me.child('sortablelist'),
            itemTplConfig,
            itemTpl,
            handleSelector,
            implHandler,
            templateContents,
            testFragment,
            showMsg = true;

        if (sortableList) {
            // if this list contains a sortable list plugin, check to ensure that itemTpl
            // contains an item when running a query for handleSelector on it
            itemTplConfig = me.getCfgValue('itemTpl');
            if (itemTplConfig.length) {
                itemTpl = itemTplConfig[0];
                implHandler = itemTpl.getImplHandler();
                if (implHandler && implHandler.body) {
                    templateContents = implHandler.body;
                    testFragment = document.createElement('div');
                    testFragment.innerHTML = templateContents;
                    handleSelector = sortableList.getCfgValueOrDefault('handleSelector');
                    if (testFragment.querySelector(handleSelector)) {
                        showMsg = false;
                    }
                }
            }
        } else {
            showMsg = false;
        }

        if (showMsg) {
            me.addMessage(me.handleElementMsg);
        } else {
            me.removeMessage(me.handleElementMsg);
        }

    }

});
