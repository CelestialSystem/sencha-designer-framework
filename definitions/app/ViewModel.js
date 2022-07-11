xds.component.Registry.addDefinition({
    override: "Ext.app.ViewModel",
    typeAlias: ['viewmodel'],

    mixin: ['base', 'viewmodelbehavior'],

    validChildTypes: ['viewmodelformula', 'abstractstore'],

    disablePromoteToClass: true,
    // Disables Transform menu from inspector
    disableTransform: true,
    disableDeletion: false,
    disableExport: true,

    defaultActionId: 'viewCode',

    iconCls: 'icon-viewmodel',

    ignoreCfgs: ['view', 'parent'],

    cfgs: [
        {
            name: 'designer|userAlias',
            displayName: 'alias',
            type: 'string',
            visibleOnlyAsTop: true,
            group: xds.architectGroup,
            allowLiteral: false,
            regex: xds.Resource.get('validUserAlias').regex,
            regexText: xds.Resource.get('validUserAlias').regexText
        },
        {
            name: 'formulas',
            merge: false,
            type: 'refgroup',
            refSelector: 'viewmodelformula',
            createTypes: ['viewmodelformula'],
            switchToViewOnLink: 'code'
        },
        {
            // We only allow configuring `schema` as its string form, which points to the userAlias
            // of a Schema class defined at the top-level. While the framework allows defining a schema
            // inline, that really only works if you don't try to share a schema between multiple models,
            // or if you define it on a base Model superclass which Architect doesn't support yet. For
            // now we'll limit it so we prevent users from getting into confusing situations.
            name: 'schema',
            merge: true,
            type: 'schema'
        },
        /*
         TODO: enable adding of a single datasession once datasessions exits
         {
         "name": "session",
         "type": "refgroup",
         "refSelector": '[type=datasession]'
         "createTypes": ['datasession'],
         },*/
        {
            name: 'stores',
            merge: false,
            type: 'refgroup',
            refSelector: 'abstractstore',
            createTypes: ['Ext.data.Store', 'Ext.data.ChainedStore'] //TODO should we include all the convenience store types?
        }
    ],

    init: function() {
        this.on({
            actionmenu: this.onActionMenu,
            cfgchange: this.onCfgChange,
            scope: this
        });
    },

    onActionMenu: function() {
        var me = this;

        if (!me.actions) {
            me.actions = [
                new Ext.Action({
                    text: xds.Resource.get('inspector').contextMenu.delete,
                    iconCls: 'icon-delete',
                    handler: function(instance) {
                        instance.scope.requestDelete();
                    },
                    scope: me
                })
            ];
        }

        return me.actions;
    },

    requestDelete: function() {
        this.publish('instance:requestdelete', [this], function(instance) {
            return !instance.deleted;
        });
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
