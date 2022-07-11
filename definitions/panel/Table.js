xds.component.Registry.addDefinition({
    override: "Ext.panel.Table",
    typeAlias: 'tablepanel',

    transformGroup: null,

    // Any component can be a child of a Table/Grid Panel, it just needs
    // to be docked in order to show...
    //validChildTypes: ['gridcolumn', 'gridfeature', 'selectionmodel'],

    // NOTE: singleChildTypes are defined in gridpanel and treepanel sub-defs only; though
    // technically many of them are shared by tablepanel, they are not merged when overridden
    // so there's no reason to define them here.

    obscureCfgs: ['deferRowRender', 'hideHeaders', 'scroll', 'scrollDelta'],
    ignoreCfgs: [
        'columns',
        'layout',
        'selType', // handled by type of selModel child
        'view',
        'viewConfig',
        'viewType'
    ],

    cfgs: [{
        name: 'features',
        merge: false,
        displayName: 'Grid Features',
        type: 'refgroup',
        refSelector: 'gridfeature',
        createTypes: ['groupinggridfeature', 'groupingsummarygridfeature', 'rowbodygridfeature', 'summarygridfeature']
    }, {
        name: 'selModel',
        merge: false,
        displayName: 'Selection Model',
        type: 'refgroup',
        max: 1,
        refSelector: 'selectionmodel',
        createTypes: ['cellselectionmodel', 'checkboxselectionmodel', 'rowselectionmodel', 'spreadsheetmodel'],
        alternates: [{
            type: 'object'
        }]

    }, {
        name: 'store',
        merge: false,
        type: 'store',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        this.on("addchild", this.onAddChild);
    },

    // Any component can be a child of a Table/Grid/Tree Panel
    // but it must to be docked in order to show
    onAddChild: function(child) {

        // Automatically set any non-native types to dock
        // Check single child and native types on def subclass
        if (!child.isType(this.singleChildTypes) && !child.isType(this.nativeTypes)) {
            if (child.hasCfg('dock') && !child.isCfgSet('dock')) {
                child.setCfgValue('dock', 'left');
                child.setCfgValue('width', 100);
            }
        }

    }

});
