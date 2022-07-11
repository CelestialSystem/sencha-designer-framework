xds.component.Registry.addDefinition({
    override: "Ext.dataview.plugin.SortableList",
    typeAlias: "sortablelist",
    ptype: "sortablelist",

    "autoName": "MySortableListPlugin",
    "toolbox": {
        "name": "Sortable List Plugin",
        "iconCls": "icon-sorter", // TODO: sortable list icon?
        "category": "Views",
        "groups": ["Views"]
    },

    "validParentTypes": ["list"],
    "validChildTypes": [],

    ignoreCfgs: [
        'list' //set internally
    ],

    cfgs: [{
        name: 'handleSelector',
        type: 'string',
        defaultValue: '.x-list-sortablehandle'
    }],

    init: function() {
        var me = this;
        me.ex('validparent', me.onValidParent, me);
    },

    onValidParent: function(parent) {
        // only allow one
        return !parent.child('sortablelist');
    }

});
