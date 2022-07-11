xds.component.Registry.addDefinition({
    override: "Ext.form.Panel",
    typeAlias: "formpanel",

    "autoName": "MyFormPanel",
    initialTitle: 'My Form',

    "toolbox": {
        "name": "Form Panel",
        "iconCls": "icon-form",
        "category": "Containers",
        "groups": ['Forms', 'Containers', 'Views']
    },

    ignoreCfgs: [
        'record' //not settable in initial config
    ],

    cfgs: [
        {
            name: "method",
            merge: true,
            editor: "options",
            options: [
                'post',
                'get'
            ]
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
