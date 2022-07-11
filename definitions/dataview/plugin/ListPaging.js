xds.component.Registry.addDefinition({
    override: "Ext.dataview.plugin.ListPaging",
    typeAlias: "listpaging",
    ptype: 'listpaging',

    "autoName": "MyListPagingPlugin",
    "toolbox": {
        "name": "List Paging Plugin",
        "iconCls": "icon-listpaging",
        "category": "Views",
        "groups": ["Views"]
    },

    "validParentTypes": ["list"],
    "validChildTypes": [],

    ignoreCfgs: [
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

    eventsFiredOnParent: [
        'loadmorecmpadded' // This gets fired on parent (List)
    ]
});
