xds.component.Registry.addDefinition({
    override: "Ext.SegmentedButton",
    typeAlias: "segmentedbutton",

    "transformGroup": null,
    "toolbox": {
        "name": "Segmented Button",
        "iconCls": "icon-segmentedbutton",
        "category": "Standard",
        "groups": ["Containers","Views"]
    },
    "validChildTypes": ["button"],
    "fullscreenAtTopLevel": false,

    obscureCfgs: ['pressedCls'],

    ignoreCfgs: [
        'defaultType',
        'pressedButtons' // not settable, overwritten during init
    ],

    cfgs: [
        {
            name: "layout",
            merge: false,
            type: "string",
            defaultValue: 'hbox',
            editor: 'options',
            options: xds.component.Registry.getAllVisibleLayouts()
        },{
            name: 'buttons',
            displayName: 'Buttons',
            type: 'refgroup',
            refSelector: 'button',
            createTypes: ['button']
        }
    ],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
        me.on('restore', me.onRestore, me);
        me.on('addchild', me.onAddChild, me);
        me.on('removechild', me.onRemoveChild, me);
    },

    onSetup: function() {
        var me = this,
            buttons;
        if (!me.hasChildren()) {
            buttons = me.createChild(['button', 'button']);
            buttons.each(function(btn) {
                me.addConditionalCfgs(btn);
            });
        }
    },

    onAddChild: function(child) {
        this.addConditionalCfgs(child);
    },

    onRemoveChild: function(child) {
        this.removeConditionalCfgs(child);
    },

    onRestore: function() {
        var me = this,
            children = this.children();

        children.each(function(child) {
            me.addConditionalCfgs(child);
        });
    },

    addConditionalCfgs: function(child) {
        if (child.isType('button') && !child.hasCfg('pressed')) {
            child.addCfg({
                name: 'pressed',
                type: 'boolean',
                defaultValue: false
            });
        }
    },

    removeConditionalCfgs: function(child) {
        if (child.isType('button') && child.hasCfg('pressed')) {
            child.removeCfg('pressed');
        }
    }
});
