xds.component.Registry.addDefinition({
    override: "Ext.ActionSheet",
    typeAlias: "actionsheet",
    canvasAlias: "xdactionsheet",

    "toolbox": {
        "name": "Action Sheet",
        "iconCls": "icon-actionsheet",
        "category": "Containers",
        "groups": ["Containers",'Views']
    },

    ignoreCfgs: [
        'defaultType'
    ],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        // Add a default child button
        if (!this.hasChildren()) {
            this.createChild('button');
        }
    }
});
