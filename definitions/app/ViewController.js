xds.component.Registry.addDefinition({
    override: "Ext.app.ViewController",
    typeAlias: ['viewcontroller'],

    mixin: ['basecontroller', 'viewcontrollerbehavior'],

    disableExport: true,

    iconCls: 'icon-viewcontroller',

    ignoreCfgs: ['view', 'parent'],

    cfgs: [{
        name: 'designer|userAlias',
        displayName: 'alias',
        type: 'string',
        visibleOnlyAsTop: true,
        group: xds.architectGroup,
        allowLiteral: false,
        regex: xds.Resource.get('validUserAlias').regex,
        regexText: xds.Resource.get('validUserAlias').regexText
    }],

    init: function() {
        this.on({
            actionmenu: this.onActionMenu,
            cfgchange: this.onCfgChange,
            scope: this
        });
    },

    onActionMenu: function() {
        return [];
    },

    onCfgChange: function(name, value, oldValue) {
        var myView;
        
        if (name === 'designer|userAlias') {
            myView = this.getViewComponentInstance();
            if (myView) {
                myView.getDocument().reSync();
            }
        }
    },

    getViewComponentInstance: function() {
        return xds.component.Registry.getInstanceById(this.viewComponentInstanceId);
    }

});
