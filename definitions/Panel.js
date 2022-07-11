xds.component.Registry.addDefinition({
    override: "Ext.Panel",
    typeAlias: "panel",

    initialTitle: 'My Panel',

    "toolbox": {
        "name": "Panel",
        "iconCls": "icon-panel",
        "category": "Containers",
        "groups": ["Containers",'Views']
    },

    cfgs: [
        {
            "name": "iconCls",
            merge: true,
            "editor": "combo",
            "options": xds.app.Resource.get('iconClassesAwesomeFive')
        }
    ],

    init: function () {
        var me = this;

        me.ex('setup', me.onSetup, me);
    },

    onSetup: function () {
        var me = this,
            initialTitle = me.initialTitle;

        if (initialTitle) {
            me.setCfgValue('title', initialTitle);
        }
    }
});
