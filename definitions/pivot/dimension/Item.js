xds.component.Registry.addDefinition({
    override: 'Ext.pivot.dimension.Item',
    autoName: 'MyDimensionItem',

    mixin: ['base'],

    cfgs: [{
        name: 'dataIndex',
        merge: false,
        type: 'datafield',
        required: true,
        storeOwnerSelector: '^[typeAlias=pivotmatrix.local]'
    }, {
        name: 'renderer',
        merge: true,
        alternates: [{
            type: 'function',
            params: [{
                "name": "value",
                "type": "Object"
            }, {
                "name": "record",
                "type": "Object"
            }, {
                "name": "dataIndex",
                "type": "String"
            }, {
                "name": "cell",
                "type": "Object"
            }, {
                "name": "column",
                "type": "Object"
            }]
        }]
    }, {
        name: 'labelRenderer',
        merge: false,
        type: 'string',
        bindable: true,
        alternates: [{
            type: 'function',
            params: [{
                "name": "value",
                "type": "Object"
            }]
        }]
    },{
        name: 'sortIndex',
        merge: true,
        type: 'datafield',
        storeOwnerSelector: '^[typeAlias=pivotmatrix.local]'
    }],

    init: function() {
        var me = this;

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
