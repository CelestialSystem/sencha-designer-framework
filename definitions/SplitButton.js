xds.component.Registry.addDefinition({
    override: "Ext.SplitButton",
    typeAlias: "splitbutton",

    "toolbox": {
        "name": "SplitButton",
        "iconCls": "icon-button",
        "category": "Standard",
        "groups": ["Views", "Forms"]
    },

    validChildTypes: ['menu'],
    singleChildTypes: ['menu'],

     cfgs: [{
        name: 'menu',
        merge: true,
        displayName: 'Menu',
        type: 'refgroup',
        refSelector: 'menu',
        createTypes: ['menu'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var me = this;
        me.setCfgValue('text', this.getName());
            
        if (!me.isCfgSet('menu')) {
            me.setCfgValue('menu', me.createChild('menu'));
        }
    }
});
