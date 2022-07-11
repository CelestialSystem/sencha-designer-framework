xds.component.Registry.addDefinition({
    override: 'Ext.pivot.matrix.Base',
    typeAlias: 'pivotmatrix.base',
    autoName: 'MyBaseMatrix',

    validChildTypes: ['pivotdimension.aggregateitem', 'pivotdimension.leftaxisitem', 'pivotdimension.topaxisitem'],

    cfgs: [{
        name: 'aggregate',
        type: 'refgroup',
        merge: false,
        refSelector: '[typeAlias=pivotdimension.aggregateitem]',
        createTypes: ['pivotdimension.aggregateitem']
    }, {
        name: 'leftAxis',
        type: 'refgroup',
        merge: false,
        refSelector: '[typeAlias=pivotdimension.leftaxisitem]',
        createTypes: ['pivotdimension.leftaxisitem']
    }, {
        name: 'topAxis',
        type: 'refgroup',
        merge: false,
        refSelector: '[typeAlias=pivotdimension.topaxisitem]',
        createTypes: ['pivotdimension.topaxisitem']
    }],

    init: function() {
        var me = this;

        me.setReference({name: 'matrix', type: 'object'});
        me.on({
            actionmenu: me.onActionMenu,
            scope: me
        });
    },

    onActionMenu: function() {
        var i8n = xds.app.Resource.get('contextMenu'),
            actions = [{
                text: i8n["delete"],
                iconCls: 'icon-delete',
                scope: this,
                handler: function(instance) {
                    instance.requestDelete();
                },
                disableWhen: function(instance) {
                    return !instance.canDelete();
                }
            }];

        return actions;
    }
});
