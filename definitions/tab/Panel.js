xds.component.Registry.addDefinition({
    override: "Ext.tab.Panel",
    typeAlias: 'tabpanel',

    toolbox: {
        name: 'Tab Panel',
        iconCls: 'icon-tab-panel',
        category: 'Containers',
        groups: ['Views', 'Containers']
    },
    autoName: 'MyTabPanel',

    validChildTypes: ['panel', 'tool', 'tabbar', 'toolbar', 'tabreordererplugin', 'tabclosemenuplugin'],
    singleChildTypes: ['tabbar', 'tabreordererplugin', 'tabclosemenuplugin'],

    // This component does not support auto widthing and will be set with default width on docking
    setAutoWidth: true,

    obscureCfgs: ['itemCls'],
    ignoreCfgs: [
        'autoScroll',
        'activeItem'
    ],

    cfgs: [{
        name: 'activeTab',
        merge: true,
        type: 'auto' // supports number/string but not Ext.Component reference
    }, {
        name: 'layout',
        merge: true,
        hidden: true,
        defaultValue: 'card',
        canSetValue: false
    },{
        name: "tabBar",
        merge: false,
        displayName: 'Tab Bar Config',
        type: "refgroup",
        refSelector: 'tabbar',
        createTypes: ['tabbar'],
        max: 1
    }, {
        // TODO remove it when DSGNR-7219 is done
        "name": "tabRotation",
        merge: false,
        "type": "string",
        "defaultValue": "default",
        "bindable": true,
        "alternates": [{
            type: 'number',
            "editor": "options",
            "options": [0, 1, 2]
        }]
    }, {
        name: 'plugins',
        displayName: 'Tab Plugins',
        type: 'refgroup',
        refSelector: 'abstractplugin',
        createTypes: ['tabreordererplugin', 'tabclosemenuplugin'],
        alternates: [{
            displayName: 'plugins',
            name: 'plugins',
            type: 'array'
        }]
    }],


    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on('flyout', me.onFlyout, me);
        me.on('cfgchange', me.onCfgChange, me);
        me.on('addchild', me.onAddChild);
        me.on('restorechild', me.onRestoreChild);
        me.on('restore', me.onRestore);
    },

    onSetup: function() {
        var me = this;

        me.setCfgValue('activeTab', 0);

        if (!me.parent()) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }

        if (!me.child('panel')) {
            var pnls = me.createChild(['panel', 'panel', 'panel']);
            for (var i = 0; i < pnls.length; i++) {
                pnls[i].setCfgValue('title', 'Tab ' + (i + 1));
            }
        }
    },

    onRestore: function() {
        // Ensure all tab configs are created
        this.children('panel').forEach(function(child) {
            if (!child.child('tab')) {
                child.createChild('tab');
            }
        });
    },

    onFlyout: function() {
        var me = this;

        if (me.isLinkedInstance) {
            return [];
        }

        var cards = [], idx = 0, value,
            cn = me.query('> panel').filter(me.getLayoutDefinition().isCardItem);
        for (var i = 0, c; c = cn[i]; i++) {
            value = String.format("{0} - {1}", idx, c.getCfgValueOrDefault('title') || '&lt;No Title Set&gt;');
            cards.push(value);
            idx++;
        }
        return [{
            xtype: 'flyoutselect',
            fieldLabel: 'Active Tab',
            data: cards,
            bindTo: {
                name: 'activeTab',
                event: 'select',
                get : function() {
                    var val = me.getCfgValue('activeTab');
                    if (Ext4.isString(val)) {
                        Ext4.Array.each(cn, function(card, i) {
                            if (card.getCfgValue('id') === val) {
                                val = i;
                                return false;
                            }
                        });
                    }
                    val = Ext4.isNumber(val) ? val : 0;
                    return cards[val];
                },
                set: function(c){
                    var index = cards.indexOf(c.getValue());
                    me.setCfgValue('activeTab', index);
                }
            }
        }];
    },

    onAddChild: function(child) {
        if (child.isType('panel')) {
            this.onChildTabAdded(child);

            // Add tab config
            if (!child.child('tab')) {
                child.createChild('tab');
            }
        }
    },

    onRestoreChild: function(child) {
        if (child.isType('panel')) {
            this.onChildTabAdded(child);
        }
    },

    onChildTabAdded: function(child) {
        // Ensure the child panel has a title set
        if (!child.getCfgValueOrDefault('title') && !child.getCfgValue('iconCls')) {
            child.setCfgValue('title', 'My Tab');
        }

        // ensure the tab config object is allowed
        var me = this,
            validChildTypes = child.validChildTypes;
        if (Ext4.isArray(validChildTypes)) {
            Ext4.Array.include(validChildTypes, 'tab');
        }

        // listen for the child being moved so we can remove the tab config child if
        // it's moving out of the tabpanel
        child.on('move', me.onChildTabMove, me, {childInstance: child});
    },

    onChildTabMove: function(oldParent, newParent, opts) {
        var me = this,
            child = opts.childInstance,
            tabConfig;
        if (!newParent || !newParent.isType('tabpanel')) {
            tabConfig = child.child('tab');
            if (tabConfig) {
                tabConfig['delete']();
            }
        }
        if (newParent !== this) {
            child.un('move', me.onChildTabMove, me);
        }
    },

    //reset, since tab panel, does not utilize panel uis
    isUiApplicable:false,
    isBaseUiApplicable:false,
    getUiInterfaceName: false,
    syncConfigWithUiInterface: false,
    canCfgChangeAlterUiInterfaceName: false

});
