xds.component.Registry.addDefinition({
    override: "Ext.view.MultiSelector",
    typeAlias: 'multiselector',

    toolbox: {
        name: 'MultiSelector',
        iconCls: 'icon-multiselector',
        category: 'Views',
        groups: ['Views']
    },

    // add refgroup for multiselector-search max 1
    // for viewConfig auto add child as is done in gridpanel
    cfgs: [{
        name: 'search',
        merge: false,
        type: 'refgroup',
        refSelector: 'multiselector-search',
        createTypes: ['multiselector-search'],
        max: 1
    }],

    singleChildTypes: [
        'multiselector-search',
        'gridview'
    ],

    init: function() {
        var me = this;

        // because we're inheriting from Ext.grid.Panel, we've got some handlers
        // we don't want called from that definition.
        me.clearListenersByEvent('addchild');
        me.clearListenersByEvent('beforeremovechild');
        me.clearListenersByEvent('removechild');
        me.clearListenersByEvent('restore');
        me.clearListenersByEvent('restorechild');
        me.clearListenersByEvent('setup');
        me.on({
            addchild: me.onAddChild,
            canvasconfig: me.onCanvasConfig,
            removechild: me.onRemoveChild,
            setup: me.onSetup
        });
    },

    onSetup: function() {
        var me = this,
            parent = me.parent();

        me.setCfgValue('title', 'My MultiSelector');
        if (!parent) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }

        // create a multiselector-search with the framework defaults.
        me.createChild({
            type: "multiselector-search"
        });
        me.createChild({
            type: 'gridview',
            userConfig: {
                // defaults to true but for this component we want it to be false.
                deferEmptyText: false
            }
        });
    },

    onCanvasConfig: function(config) {
        // we don't want a dummy store for this particular component.
        if (config.store === this.flyCfg('store').getNoneStore()) {
            delete config.store;
        }

        return config;
    },

    onAddChild: function(child) {
        if (child.isType('multiselector-search')) {
            child.setReference('search');
        }
    },

    onRemoveChild: function(child) {
        if (child.isType('multiselector-search')) {
            child.setReference();
        }
    }

});