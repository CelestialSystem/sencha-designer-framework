xds.component.Registry.addDefinition({
    override: "Ext.dataview.IndexBar",
    typeAlias: "listindexbar",

    "toolbox": {
        "name": "List Index Bar",
        "iconCls": "icon-indexbar",
        "category": "Views",
        "groups": ["Views"]
    },

    validParentTypes: ['list'],
    disablePromoteToClass: true,

    ignoreCfgs: ['tpl', 'data', 'tplWriteMode', 'docked'],

    init: function() {
        var me = this;
        me.setReference('indexBar');
        me.ex('validparent', me.onValidParent, me);
    },

    onValidParent: function(parent) {
        // only allow one
        return !parent.child('listindexbar');
    }

});
