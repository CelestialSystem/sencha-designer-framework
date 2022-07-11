xds.component.Registry.addDefinition({
    override: "Ext.navigation.Bar",
    typeAlias: "navigationbar",

    // Prevent unnecessary xtype in codegen
    classAlias: null,

    "autoName": "MyNavigationBar",
    "iconCls": 'icon-navbar',

    "fullscreenAtTopLevel": false,
    "disableTransform": true,
    "disableDuplication": true,
    "disablePromoteToClass": true,
    "customConfigGroup": 'NavigationBar Child',

    cfgs: [{
        name: 'layout',
        merge: false,
        type: 'string',
        defaultValue: 'hbox',
        hidden: true,
        canSetValue: false
    }, {
        name: "ui",
        merge: true,
        editor: "combo",
        options: ["dark", "light"]
    }],

    ignoreCfgs: ['scrollable'],

    init: function() {
        var me = this;

        me.on( {
            addchild: me.onAddChild,
            restorechild: me.onAddChild,
            removechild: me.onRemoveChild,
            scope: me
        } );

        me.setReference('navigationBar');
    },

    onAddChild: function(child) {
        if (child.isType('component') && !child.hasCfg('align')) {
            child.addCfg({
                name: 'align',
                type: 'string',
                editor: 'options',
                options: [
                    'left',
                    'right'
                ],
                group: this.customConfigGroup
            });
        }
    },

    onRemoveChild: function(child) {
        if (child.hasCfg('align') && child.flyCfg('align').getGroup() === this.customConfigGroup) {
            child.removeCfg('align');
        }
    }
});
