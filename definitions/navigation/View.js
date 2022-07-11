xds.component.Registry.addDefinition({
    override: "Ext.navigation.View",
    typeAlias: 'navigationview',

    "canvasAlias": "widget.xdnavigationview",

    "toolbox": {
        "name": "Navigation View",
        "iconCls": "icon-navview",
        "category": "Views",
        "groups": ['Views', 'Containers']
    },
    "autoName": "MyNavigationView",
    "disableTransform": true,
    titleConfigGroup: 'NavigationView Child',

    ignoreCfgs: [
        'items'
    ],

    cfgs: [{
        name: 'layout',
        merge: false,
        type: 'string',
        defaultValue: 'card',
        hidden: true,
        canSetValue: false
    }, {
        name: 'navigationBar',
        merge: false,
        type: 'refgroup',
        refSelector: 'navigationbar',
        createTypes: ['navigationbar'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on('addchild', me.onAddChild, me);
        me.on('restorechild', me.onAddChild, me);
        me.on('removechild', me.onRemoveChild, me);
        me.ex('canvasconfig', me.onCanvasConfig, me);
        me.ex('beforetransform', me.onBeforeTransform, me);
        me.on('beforeaddchild', me.onBeforeAddChild, me);
    },

    onBeforeAddChild: function(child) {
        // Only allow one nav bar
        if (child.isType('navigationbar') && this.child('navigationbar')) {
            return false;
        }
    },

    onCanvasConfig: function(config) {
        // Since navigation bar has no xtype defined, it default to its parent xtype i.e container.
        //   Deleting it as it will otherwise create a container instance
        if (config.navigationBar) {
            delete config.navigationBar.xtype;
        }
        return config;
    },

    onAddChild: function(child) {
        if (child.isType('component') && !child.hasCfg('title') && !child.isType('navigationbar')) {
            child.addCfg({
                name: 'title',
                type: 'string',
                group: this.titleConfigGroup
            });
        }
    },

    onRemoveChild: function(child) {
        if (child.hasCfg('title') && child.flyCfg('title').getGroup() === this.titleConfigGroup) {
            child.removeCfg('title');
        }
    }
});