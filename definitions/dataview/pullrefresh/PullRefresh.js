xds.component.Registry.addDefinition({
    override: "Ext.dataview.pullrefresh.PullRefresh",
    typeAlias: "pullrefresh",
    ptype: "pullrefresh",

    "autoName": "MyPullRefreshPlugin",
    "toolbox": {
        "name": "Pull Refresh Plugin",
        "iconCls": "icon-pullrefresh",
        "category": "Views",
        "groups": ["Views"]
    },

    "validParentTypes": ["list"],
    "validChildTypes": [],

    ignoreCfgs: [
        'list', //set internally
        'border',
        'bottom',
        'contentEl',
        'data',
        'disabled',
        'docked',
        'draggable',
        'floatingCls',
        'height',
        'hidden',
        'hideAnimation',
        'html',
        'id',
        'itemId',
        'left',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'right',
        'showAnimation',
        'styleHtmlContent',
        'top',
        'tplWriteMode',
        'width',
        'zIndex',
        'tpl'
    ],

    cfgs: [
    ],

    init: function() {
        var me = this;
        me.ex('validparent', me.onValidParent, me);
    },

    onValidParent: function(parent) {
        // only allow one
        return !parent.child('pullrefresh');
    }

});
